# Tests

## Outline

- How are tests configured and implemented?
- What is measured, stored and evaluated?
- Test categories
  - Page Load
  - Dynamic Component Load Times
  - State Change Times
- Lighthouse Test Configuration
  - Test Script
  - Evaluator Script
  - 
- Playwright test configuration
  - Tests
  - Attachments
  - Screenshots
- Browser Choices: Reasoning and test implementation

## Content

As described above, tests and test configuration were the last step in the project creation process. As such tests were either left "as is" or not configured until the application could be considered "done". The test suite for this project can be split into two halves: Lighthouse CLI and Playwright (see section `X`). Lighthouse is used to cover mostly aggregate metrics, while Playwright is used to export navigation and HTML event times.

To this end, a script was written to automate the execution of Lighthouse test and to store Lighthouse reports in a comporehensible way. Listing `X` shows parts the implementation of the testing script. It reads project configurations from an external configuration file and iterates over them, executing the tests for every framework multiple times. Listing `Y` shows an excerpt of the configuration file. Every project is built and hosted, if either a host command, e.g. using `npm run <script>`, or a serve command using `serve` is defined in the configuration file. While the application is hosted, a headless Google Chrome browser window is launched and multiple lighthouse tests are preformed. The report is generated using the URL as it is defined in the configuration and with options that define among other things an HTML report to be generated, only performance metrics to be collected and to ignore HTTP status codes. The last option is necessary as web servers started with `serve` return a 404 status code for files that do not exists in the hosted directory. For applications that rely on `index.html` to be returned if a requested file is not available, this behaviour is not desired. For example, requesting the defined path `/about` results in a 404 with the `index.html` file as the response body. Without the `ignoreStatusCode: true` option, the Lightouse test fails as the page is considered to be unavailable.

Once the test results are available, the relevant metrics are collected, stored in a json file and the HTML report is stored as a mean to debugging. After the tests are finished and results are stored, the Google Chrome window is killed and the webserver is stopped.

In order to evaluate and summarize the collection of tests performed using this test script, another script as written in order to create test summaries. This report reader iterates over the list of json files and calculates the average per metric, route and project configuration from the configuration file. This report reader makes it possible to compare the test results and interpret the performance of the frameworks (see chapter 5).

---

Similar to the test method for Lighthouse, Playwright scripts can be triggered using a script to unify the output files. Listing `Z` shows the implementation of this trigger script. Project directories are defined and the test command is executed in the directory with the fitting environment variables. `PW_TEST_HTML_REPORT_OPEN` tells Playwright to not open a report even if a test fails, `PLAYWRIGHT_HTML_REPORT` defines the report directory as a directory with time code, so that no test results are overwritten, and `PLAYWRIGHT_JSON_OUTPUT_FILE` specifies the location where a JSON reports shall be stored.

The tests and test configuration are similar for all frameworks. Listing `X` shows how the tests are configured. Timouts are defined fo rall tests so that even slowly loading pages are tested properly and retries are specified to repeat failed test twice. The reason for this specification is that fluctuating timings close to the limit of failure should be tested multiple times to ensure that the test is supposed to fail. All test executions and repetitions are configured to run in sequence to minimize the influence of the availability of hardware resources. This is especially imported because Playwright both opens the application in a browser and runs a webserver. It is set to start a webserver, wait for its availability and then open the specified application under the specified `baseURL`. The webserver command, port and baseURL are different for every framework.
The test configuration also specifies a list of browsers to test the applications in. For this study, 7 browsers were chosen to test based on the most used browsers (SOURCE) and their mobile versions. The browsers are Chromium, Google Chrome, Mobile Chrome, Safari, Mobile Safari, Microsoft Edge and Firefox.

The tests written for this appliation are threefold as they reflect the separation of performance metrics (see section 3.4). Listings `X`, `Y` and `Z` show the content of the test files.

First, page load times are measured using the `page-load.spec.js`. Every defined route is opened in the browser window, the navigation timings are extracted though a `page.evaluate(<evalFunction>)` method and the timings are attached and annotated so that they can be read after the test execution. The test for every page is that the timmings `loadEventEnd` and `domComplete` are faster than a time budget. The paths and time budget per page are configured in `pages.js` (see listing `X`). To ensure a fast performance, the time budgets are defined to be under 2 seconds for all pages. Because no requests are made in the design of the application on the About page, the time budget was lowered to 1.5 seconds here.

Second, component load times are measured with the help of `dynamic-performance.spec.js`. The same routes are opened after an init script is injected into the browser window. Listings `X` and `Y` show parts of the test definition and the injected script. The later waits for a specific element to appear in the DOM that does not appear in only an HTML skeleton. Afterwards, it initializes a `MutationObserver`  on that element. Each observervation is stored with an xpath, id and a mutation time. The mutation time is overwritten every time so that only the latest update is recorded and the list of times is published as a member of the window object. Recorded mutations are added or removed children, addition or removal of the element itself and a changed attribute. Because the time of mutation is only measured as a time difference to the addition of an application-specific element, the recorded times are an estimation of the execution time between framework initialization and the latest DOM mutation.

The test script waits for 10 seconds after the injection of the recording script and then evaluates the recorded timings. The update times are also attached to the test as a JSON file so that they can be traced after the test context no longer exists. The test to pass for the page is that the latest DOM mutation happens within the page's load time budget. In order to trace the failing components more easily, screenshots are taken of each slow HTML element. Additionally, a screenshot of the whole page is taken in which slow elements are colored. Every screenshot is then attached to the test. This method ensures that slow components can be identified visually even if xpath and id of the element change.

Third, test for the component update times are specified in `state-change.spec.js`. In this test specification two other time budgets are defined. The first update to the DOM and the slowest update to the DOM are tested. The idea behind these time budgets are that users may perceive that their action had any effect or that the effect of their actions finishes within a time frame as "reaction time". To this end, user actions are defined in combination with a route to perform these actions on. For this work, 4 actions are defined on the Create page: The changing of the caption, the selection of an image, the insertion of a media source and the creation of a new post, which is a combination of caption change and media selection.

In order to evaluate the speed of those user actions, the same mutation recording script is inserted. The page is then opened and the recorded mutation timings are reset. Afterwards, the user action is performed and the new mutation times are extracted, attached to the test and evaluated. The tests to pass are then that the earliest mutation timing is within 100 ms of the user input and the latest mutation timing is within 500 ms of the user input. Again, HTML elements that were recorded as mutations and do not pass the tests are screenshot. These screenshots are also attached to the test in order to debug applications that do not pass the test.