const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'lighthouse-reports', 'ig-clone-next', 'localhost', 'about', 'lighthouse-report-localhost-2024-04-29-14-35-04.json')
const report = JSON.parse(fs.readFileSync(filepath, 'utf8'));

// console.log(Object.entries(report.lhr.audits).length)
// console.log(Object.keys(report.lhr.audits))
console.log(Object.entries(report.lhr.audits.metrics).length)
console.log(Object.keys(report.lhr.audits.metrics))