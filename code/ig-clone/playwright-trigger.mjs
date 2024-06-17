import { spawn } from 'child_process'

const logTests = true

const projects = [
  {
    name: "IG Clone Angular",
    cwd: "ig-clone-angular"
  },
  // {
  //   name: "IG Clone Astro",
  //   cwd: "ig-clone-astro"
  // },
  // {
  //   name: "IG Clone Next",
  //   cwd: "ig-clone-next"
  // },
  // {
  //   name: "IG Clone Nuxt",
  //   cwd: "ig-clone-nuxt"
  // },
  // {
  //   name: "IG Clone React",
  //   cwd: "ig-clone-react"
  // },
  // {
  //   name: "IG Clone Vue",
  //   cwd: "ig-clone-vue"
  // },
]

const testArguments = [
  // "/.*change\.spec\.js/"
]

console.log(`Found projects: ${projects.map(p => `"${p.name}"`).join(', ')}`)

console.log(`Starting tests for ${projects.length} ${projects.length == 1 ? 'project' : 'projects'}...`)

for (const project of projects) {

  console.log(`Starting with "${project.name}"`)

  const now = new Date()
  const reportDirectory = `playwright-report-${now.getFullYear()}-${now.getMonth()}-${String(now.getDate()).padStart(2, 0)}_${String(now.getHours()).padStart(2, 0)}-${String(now.getMinutes()).padStart(2, 0)}-${String(now.getSeconds()).padStart(2, 0)}`

  await new Promise(resolve => {

    const testProcess = spawn("npm", ["run", "test:e2e", ...testArguments], {
      cwd: project.cwd,
      shell: true,
      env: {
        ...process.env,
        PW_TEST_HTML_REPORT_OPEN: 'never',
        PLAYWRIGHT_HTML_REPORT: reportDirectory
      }
    })

    testProcess.stdout.on('data', (data) => {
      if (logTests) console.log(data.toString())
    });

    testProcess.stderr.on('data', (data) => {
      if (logTests) console.error(data.toString());
    });

    testProcess.on('close', (code) => {
      if (code != 0) console.warn("Test ended with code", code)
      resolve()
    });

    testProcess.on('error', (error) => {
      if (logTests) console.error(`error: ${error.message}`);
    });

    process.on("SIGINT", () => {
      testProcess.stdin.pause()
      testProcess.kill()
      process.exit(1)
    })
  }).then(() => {
    console.log(`Finished "${project.name}" (${projects.indexOf(project) + 1}/${projects.length})`)
  })
}

console.log("DONE")