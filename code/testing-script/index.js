import fs from 'fs';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import config from "./config.js"
import { exec, spawn } from 'child_process';

import { createLogger, transports, format } from "winston"

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  level: 'debug',
  transports: [
    new transports.Console({
      level: 'info', format: format.combine(
        format.colorize(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      )
    }),
    new transports.File({ filename: 'logs/info.log', level: 'info' }),
    new transports.File({ filename: 'logs/debug.log', level: 'debug' }),
  ]
})

const performances = []

function dateToUriSafeString(d) {
  let month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds();


  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;
  if (hour.toString().length < 2)
    hour = '0' + hour;
  if (minute.toString().length < 2)
    minute = '0' + minute;
  if (second.toString().length < 2)
    second = '0' + second;

  return [year, month, day, hour, minute, second].join('-');
}

function build(projectConfig) {
  return new Promise((resolve, reject) => {

    if (projectConfig.buildCommand) {
      logger.info("Starting build...")
      exec(`${projectConfig.buildCommand}`, { cwd: projectConfig.projectPath, maxBuffer: 1024 * 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          logger.error(`BUILD FAILED: ${error}`);
          return;
        }

        if (stdout) logger.debug(stdout)
        if (stderr) logger.error(stderr)
        resolve()
      })
    }
    else {
      logger.info("Skipping build because buildCommand was not specified")
      resolve()
    }
  })

}

async function stopServer(hostProcess, projectConfig) {
  return new Promise((resolve, reject) => exec(`taskkill /pid ${hostProcess.pid} /f /t`, (error, stdout, stderr) => {
    if (error) logger.error(error)
    if (stdout) logger.debug(stdout)
    if (stderr) logger.error(stderr)
    resolve()
  }))
}

for (let projectConfig of config.projects) {
  logger.info(`Testing project ${projectConfig.name}`)

  // BUILD PHASE
  await build(projectConfig)

  // STARTING HOST PROCESS
  let hostProcess = null;
  let serverCommand = null;
  if (config.preferredServeCommand == "serve") {
    serverCommand = projectConfig.serveCommand || projectConfig.hostCommand
  } else if (config.preferredServeCommand == "host") {
    serverCommand = projectConfig.hostCommand || projectConfig.serveCommand
  }

  if (serverCommand) {
    logger.info("starting server...")
    const [command, ...options] = serverCommand.split(" ");
    hostProcess = spawn(command, options, {
      cwd: projectConfig.projectPath,
      shell: true
    })
  }
  else {
    if (projectConfig.url.startsWith('http://localhost')) throw new Error("Server was not properly configured. Check prefferedServeCommand, hostCommand and/or serveCommand for project", projectConfig.name)
    else ("Server was not started because no command was specified")
  }

  if (serverCommand) {
    hostProcess.stdout.on('data', (data) => {
      logger.debug(`stdout: ${data}`);
    });

    hostProcess.stderr.on('data', (data) => {
      logger.error(`stderr: ${data}`);
    });

    hostProcess.on('close', (code) => {
      if (code == null) logger.info("server was stopped gently :)")
      else logger.info(`server process exited with code ${code}`);
    });

    hostProcess.on('error', (error) => {
      logger.error(`error: ${error.message}`);
    });

    process.on("SIGINT", async () => {
      await stopServer(hostProcess, projectConfig)
    })
  }

  // START LIGHTHOUSE TEST
  logger.info("Starting lighthouse tests...")
  const url = projectConfig.url
  const chrome = await chromeLauncher.launch(
    { chromeFlags: ['--headless'] }
  );
  const options = { logLevel: 'warn', output: 'html', onlyCategories: ['performance'], port: chrome.port, ignoreStatusCode: true };

  for (const route of (projectConfig.paths || ["/"])) {
    const perf_Scores = []

    for (let i = 0; i < config.runsPerProject; i++) {

      const runnerResult = await lighthouse(url + route, options);

      const { report: reportHtml, artifacts, lhr } = runnerResult;
      const { timing, fetchTime, categories, ...rest } = lhr

      fs.mkdirSync(`${projectConfig.reportDirectory}${route == "/" ? "/index" : route}`, { recursive: true }, (err) => {
        if (err) throw err;
      });
      fs.writeFileSync(`${projectConfig.reportDirectory}${route == "/" ? "/index" : route}/lighthouse-report-${new URL(url).hostname}-${dateToUriSafeString(new Date())}.html`, reportHtml);
      fs.writeFileSync(`${projectConfig.reportDirectory}${route == "/" ? "/index" : route}/lighthouse-report-${new URL(url).hostname}-${dateToUriSafeString(new Date())}.json`, JSON.stringify({ artifacts, lhr }, null, 2));

      logger.info(`Performance score on run #${i + 1} was ${runnerResult.lhr.categories.performance.score * 100} (in ${Math.round(timing.total / 10) / 100} seconds)`);
      perf_Scores.push(runnerResult.lhr.categories.performance.score * 100)
    }

    const average_score = perf_Scores.reduce((partialSum, a) => partialSum + a, 0) / perf_Scores.length
    fs.writeFileSync(`${projectConfig.reportDirectory}${route == "/" ? "/index" : route}/summary-${new URL(url).hostname}-${dateToUriSafeString(new Date())}.json`, JSON.stringify({ average_score, perf_Scores }, null, 2));
    logger.info(`Average Performance Score (route "${route}"): ${average_score} (MIN: ${Math.min(...perf_Scores)} MAX: ${Math.max(...perf_Scores)})`)
    performances.push(`${projectConfig.name} (route "${route}"): ${average_score}`)
  }

  await chrome.kill();
  if (serverCommand) await stopServer(hostProcess, projectConfig)
}

logger.info("ALL DONE")
performances.forEach((performance) => logger.info(performance))