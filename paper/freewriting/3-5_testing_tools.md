# Testing Tools

## Outline

- What tools were using testing and how do they work? 
- What requirements should be fulfilled by the tools
- What problems are expected to arise from these tools?
- What requirements are covered by which tool?

1. Introduction into Playwright
2. Introduction into Lighthouse CLI

## Content

In order to test for these metrics, a set of testing tools is needed. These testing tools are required to cover the measurements described above. Additionally, the tools have to work with similar configuration for all selected frameworks and report results in a machine-readable format in order to evaluate results and make calculations with them. This is a requirement because from previous experience it is known that performance values have a considerable variance.
To this end, two different tools for automating test were chosen:

1. **Lighthouse CLI**:The Lighthouse CLI makes it possible to automate the execution of tests. Those test make `XXX` measurements and combine those with weights in categories and reduce them to a single performance score, as well as 5 main category scores. These categories are performance, accessibility, best practices, SEO and PWA.
Additionally, Lighthouse reports contain recommendations for optimizing measurements and increasing the score. It is a famous tool for measuring initial page loads, page content and meta-information for website. Changes after the initial page load are not possible with the Lighthouse CLI. Reports are by default generated as HTML files, but the tools was for this study configured to generate both HTML and JSON reports. Plus, the reports for this study only contain measurements from the performance category.
Since Lighthouse is designed to test live websites in production, the tools does not support starting a local development server. The testing with Lighthouse therefore needs to include building and hosting the application locally while tests are running.
1. **Playwright**: Playwright is a front-end testing tool for web applications in development. It mainly supports checking page content, but also supports the execution of injected JavaScript and full control over the browser. This also means that the control over user inputs enables the measurement of timings connected to user behaviour such as clicking links and buttons, hovering the mouse over elements or using `<input>`-elements. Such options are needed to evaluate the timings of interactive elements. The development focused design also bears the advantage of its initialization being included in some framework's initialization options. Both Svelte and Vue.js support installing and initializing configuration for Playwright in their own initialization. Similar to Lighthouse, reports can be created as HTML and as JSON files. For this study, only JSON reports were used for the results, but HTML reports were used for debugging tests.

Although all requirements can be fulfilled with these two tools, multiple problems were found. Because Lighthouse reports include data that is influence by all actors and constraints regarding the web page, many factors contribute to the variability of results. `Insert source` ([source](https://developers.google.com/web/tools/lighthouse/variability)) contains a list of sources of variability. The relevant sublist of factors for this study contains for local tests client resource contention, client hardware variability and browser nondeterminism.
Client hardware variability is mitigated through the usage of the same client device for all tests. The client device in question is a HP Envy x360 Convertible 15-eu0xxx with an AMD Ryzen 5 5500U processor and 16GB RAM. The OS on the device Windows 11 Home (Version 10.0.22631 Build 22631) during testing.
Client resource contention could not be fully mitigated. Attempts to keep a lid on client resources was killing the most hardware intensive background tasks and service on the system before starting tests.
Browser nondeterminism was taken into account and adopted as a test dimension. To this end, whereever possible tests were executed with the most commonly used browsers. For Lighthouse tests, such an option was not apparent. Instead all tests were explicitly executed on Google Chrome. A Lighthouse report was not generated on other browsers. 

For tests on distant servers, other factors contribute in addition. Local network variability, tier-1 network variability and web server variability have to be considered for the tests. Local network and tier-1 network variability could not be mitigated. The internet connection speed at test location was 100 Mbit/s to simulate common modern consumer internet connections (SOURCE).
Web server variability could not be mitigated as well. For this reason, a hosting service was explicity chosen to minimize the variability (see chapter `X`).

For mitigation of all factors of variability, Lighthouse test were executed 20 times to gain an average for all measurements. The repetitions were all configured with the same browser context and web server for local tests for each test run. The reason for this decision is that fluctuations based on first requests within the client or the server should be mitigated.

For Playwright tests, two additional problems were found before the start of the test phase. The time of injected JS scripts could not be properly determined. This fluctuation of the timing of injection could not be mitigated.
Also, reading data from the window context after the fact is difficult, because the context closes after the fact and the report only contains explicitly tested values. Objects such as the needed navigationTimings are no longer available after the fact. The solution to this problem was to attach all necessary information as a file to the report so it readable after the context has closed.

With the tools and workarounds in place, the data needed for the study could be collected. Lighthouse covers TBW. TTFB, TTI, TBT, LVC, LCP, OFVC and OLVC whereas Playwright covers all navigation and HTML event times, namely DomContentLoaded, LoadEventEnd, User Input Times, State Change Times and Mutation Times.