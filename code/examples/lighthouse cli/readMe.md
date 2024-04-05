# Lighthouse CLI

[NPM Package](https://www.npmjs.com/package/lighthouse#using-the-node-cli)

```bash
npx lighthouse https://leto.andreasnicklaus.de --output=json --output-path=report.json
```

# Notes

- bootup-time includes scripting and scriptParseCompile times:
```json
"bootup-time": {
      "id": "bootup-time",
      "title": "JavaScript execution time",
      ...
      "details": {
        "type": "table",
        "items": [
          {
            "url": "https://leto.andreasnicklaus.de/",
            "total": 1707.308,
            "scripting": 86.59599999999998,
            "scriptParseCompile": 8.064
          },
          {
            "url": "https://leto.andreasnicklaus.de/js/app-86edb117.a0c1cc34.js",
            "total": 1660.415999999999,
            "scripting": 638.5399999999989,
            "scriptParseCompile": 0.104
          },
          ...
```

- diagnostics and network-requests include statistics for networking tasks
```json
"diagnostics": {
      "id": "diagnostics",
      "title": "Diagnostics",
      ...
      "details": {
        "type": "debugdata",
        "items": [
          {
            "numRequests": 36,
            "numScripts": 18,
            "numStylesheets": 8,
            "numFonts": 0,
            "numTasks": 2080,
            "numTasksOver10ms": 10,
            "numTasksOver25ms": 6,
            "numTasksOver50ms": 4,
            "numTasksOver100ms": 3,
            "numTasksOver500ms": 0,
            "rtt": 19.201999999999998,
            "throughput": 38856526.17573934,
            "maxRtt": 32.056,
            "maxServerLatency": 387.11,
            "totalByteWeight": 504168,
            "totalTaskTime": 1209.2749999999248,
            "mainDocumentTransferSize": 23628
          }
        ]
      }
    },
``` 