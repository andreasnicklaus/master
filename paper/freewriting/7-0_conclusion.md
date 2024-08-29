# Conclusion

## Outline

- What are the conclusions from the test results concerning "best framework"?
- What are the conclusions from the test results concerning "best browser for testing"?
- What are the conclusions from the test results concerning "time budgets"?
- What are the conclusions from the test results concerning "Are local tests representable for apps in production"?

---

- results are framework-specific
- Browser choice should dependent on the intention and framework
- Browser choice makes a big difference
- Navigation performance is missing, especially detremental for Angular
- 10 second limit for mutationobserver: slow components and fast updating components
- initialization interval does change the completeness and comparability of the results of component load times


## Content

This study has presented a study comparing mainstream JavaScript frameworks based on an example application. To this end, a web application was designed based on the Android mobile app of Instagram and three rendering phases were identified to categorize measurements: the page load as representative for pure HTML website, the load time of JavaScript components and the update time of JavaScript components. In this study, Angular, Astro, Next.js, Nuxt, React, Svelte and Vue.js were contrasted with each other. The measurement results show that the results are not clear-cut towards any framework, but rather indicate tendencies of load and update speeds of frameworks, browsers, page types, hosting environments and implementation. All frameworks display strength in at least one metric relating to page and component load. Component update time is the only metric category outlining fast and slow frameworks, as well as browsers. Google Chrome and Microsoft Edge turn out to be the fastest of the compared browsers and Nuxt appears to be the fastest framework. On the other end of the spectrum, Mobile Safari and Webkit as well as Next.js produce slow component update times.

Because the framework choice appears to be dependent on more just framework itself, some considerations can recommended for it. Before choosing a framework for new projects, the browser usage of potential users should be taken into consideration, especially with Mobile Safari and Webkit. If the used browsers are known, budgets for any tested metrics should be adapted to match expectations based on the different results presented in this study. Additionally, results have shown that performance measurements fluctuate to up to 30% in either direction. Therefore, all test should be executed multiple times and limits for passing tests should be reached multiple times before a test should be considered passed. This recommendation should especially be considered when comparing frameworks, as shown in this work.

Future work might find solutions for uncovered problems with testing strategems and missing data in this study. First, the measurements do not cover navigation between the pages, but only the load behaviour of single pages. THe current expecation is that navigation measurements favor Angular applications because no addition JS files have to be loaded on navigation to another page. Especially the byte weight of pages might be compensated in favor of Angular for this reason.
Second, actual time between updates to the application's state and visual changes in the user's viewport are skipped in this study with the goal to keep the measurements methods as open as possible. Solutions to this end include white-box testing and might involve triggering state update events that are registerable in a testing suite.
Third, the interpretation of test results uncovered trade-offs relating to the recording intialization and end. A slow interval for initialization of the MutationObserver for DOM mutations makes results comparable to other test executions, but also leads to missing data for early mutations between injection of the recording script and initialization of the MutationObserver. This might be solved through a different initialization process, e.g. including the recording script into the application's code.
Additionally, the end of recording has two possible conflicts. Components that load slower than ten seconds are not recorded at all and component that update constantly, for example a digital clock component, are also not properly recorded. For the former, no solution is currently apparent except a longer recording, which does not fully solve the problem.  A solution for the later conflict is implemented by setting a custom HTML attribute `skipPerformance="true"` to elements that should be ignored for the recording at all. A different appreach might open opportunities to improve the registration of a fully loaded application in test suites appart from the event of the HTML standard.
Lastly, this study only covers four pages of a single app, two hosting environments and up to 20 repetitions per Lighthouse test and 3 repetitions of Playwright test if tests fail. Future work should repeat the measurements of the example application of this study with more test repetitions to eliminate fluctuations. Also, insights into differences in performance and considereations for tests might be gained through the addition of pages for all page types to the applications and other hosting environments. 