import path from "path"
import fs from 'fs';

const directory = path.join(".", "lighthouse-reports", "ig-clone-angular", "vercel", "index")
const files = fs.readdirSync(directory).filter(fileName => fileName.endsWith(".json") && fileName.startsWith("lighthouse-report"))

const data = files.map(filename => {
  const filestring = fs.readFileSync(path.join(directory, filename), 'utf8');
  const json = JSON.parse(filestring)
  return json.lhr.audits.metrics.details.items[0].totalBlockingTime
})

console.log(data.join(", "))

const min = Math.min(...data)
const max = Math.max(...data)
const range = max - min
const average = data.reduce((partialSum, a) => partialSum + a, 0) / data.length

console.log(`AVERAGE: ${average}
RANGE: ${range}
MIN: ${min}
MAX: ${max}`)