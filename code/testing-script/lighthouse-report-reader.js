import fs from 'fs';

import config from "./config.js"
import path from 'path';

for (const projectConfig of config.projects) {
  const { reportDirectory, paths, name, url } = projectConfig

  for (const route of paths) {

    const averageGeneralMetrics = {
      performanceScore: [],
      firstcontentfulpaint: [],
      largestcontentfulpaint: [],
      totalbyteweight: [],
    }

    const averageMetrics = {
      firstContentfulPaint: [],
      firstMeaningfulPaint: [],
      largestContentfulPaint: [],
      interactive: [],
      speedIndex: [],
      totalBlockingTime: [],
      cumulativeLayoutShift: [],
      timeToFirstByte: [],
      observedFirstContentfulPaint: [],
      observedFirstMeaningfulPaint: [],
      observedLargestContentfulPaint: [],
      observedDomContentLoaded: [],
      observedFirstVisualChange: [],
      observedLastVisualChange: [],
      observedSpeedIndex: []
    }

    const files = fs.readdirSync(`${reportDirectory}${route == "/" ? "/index" : route}`).filter(fileName => fileName.endsWith(".json") && fileName.startsWith("lighthouse-report"))

    files.forEach(fileName => {
      console.log(fileName)
      const report = JSON.parse(fs.readFileSync(path.join(`${reportDirectory}${route == "/" ? "/index" : route}`, fileName), 'utf8'));
      // console.log(report.lhr.categories.performance.score, report.lhr.categories.performance.title)

      const performanceScore = report.lhr.categories.performance.score * 100

      const {
        "first-contentful-paint": { numericValue: firstcontentfulpaint },
        "largest-contentful-paint": { numericValue: largestcontentfulpaint },
        "total-byte-weight": { numericValue: totalbyteweight }
      } = report.lhr.audits

      // const { firstContentfulPaint, firstMeaningfulPaint, largestContentfulPaint, interactive, speedIndex, totalBlockingTime, cumulativeLayoutShift, timeToFirstByte, observedFirstContentfulPaint, observedFirstMeaningfulPaint, observedLargestContentfulPaint, observedDomContentLoaded, observedFirstVisualChange, observedLastVisualChange, observedSpeedIndex } = report.lhr.audits.metrics.details.items[0]
      // console.log({ firstContentfulPaint, firstMeaningfulPaint, largestContentfulPaint, interactive, speedIndex, totalBlockingTime, cumulativeLayoutShift, timeToFirstByte, observedFirstContentfulPaint, observedFirstMeaningfulPaint, observedLargestContentfulPaint, observedDomContentLoaded, observedFirstVisualChange, observedLastVisualChange, observedSpeedIndex })

      const metrics = report.lhr.audits.metrics.details.items[0]

      for (const [key, value] of Object.entries(averageMetrics)) {
        value.push(metrics[key])
      }

      const generalMetrics = { performanceScore, firstcontentfulpaint, largestcontentfulpaint, totalbyteweight }
      for (const [key, value] of Object.entries(averageGeneralMetrics)) {
        value.push(generalMetrics[key])
      }

    })

    for (let [key, value] of Object.entries(averageMetrics)) {
      averageMetrics[key] = value.reduce((a, b) => a + b, 0) / value.length
    }
    for (let [key, value] of Object.entries(averageGeneralMetrics)) {
      averageGeneralMetrics[key] = value.reduce((a, b) => a + b, 0) / value.length
    }

    console.log({ name, files, route, url, ...averageMetrics, ...averageGeneralMetrics })
  }
}