# Metrics

## Outline

- What metrics can be measured?
- What metrics should be used?
- What metrics will be used?
 
1. Lighthouse performance
2. Page weight
3. Largest/First Contentful/Meaningful Paint
4. TTFB/TTI/SpeedIndex

- **Page Load Times**
  - Metrics (Lighthouse metrics)
  - Timings (Events)
  - Expectations for the frameworks

- **Component Load Times**
  - Measuring JS-dependent parts of the webpage
    1. Dom Updates with MutationObserver
    2. Problems with MutationObservers and Playwright
  - Expectations fro the frameworks

- **Component Update Times**
  - 3rd type of update through JS
  - Expectations for the frameworks
  - Interesting comparisons with reasoning and expectation
    - MPA vs SPA
    - Angular vs React vs Vue
    - Nuxt vs Vue und Next vs React
    - Vue-basiert vs React-basiert
    - Svelte vs Astro

## Content

<!-- TODO: insert source -->
`Insert source` states that the reaction time of user interface decreases user retention and continued actions. The "reaction time" is interpreted in three different ways: Time from navigation start to finished DOM updates, time from user input to finished DOM updates and time from state change, a.k.a. data query finish, to finished DOM updates. These update time can be combined or described using the navigation events (see figure `X`). Naturally, other metrics measurements than the navigation timings were also considered.

From the list of measurements in Lighthouse reports (see chapter `X`) sublists with relevant metrics were created to properly represent the load times of the described render sections. Because none of these measurements cover the reaction time after a user input, additional measurements have to be done. Self-written code is injected through Playwright to measure DOM update times (see chapter `X`).
The following subsections describe which measurements are needed for each render section in detail.

<!-- ![](../img/request-timing.png) -->

### Page Load Times

For this study, the first contact point to a web page is considered to be the first page load or initial page load. The user's expectations are assumed to be find a page with the wanted information or inputs rather than finding the information itself. Therefore, the goal of the browser and rendering engine for this first time frame, here called "page load", is to project the content of the page on the DOM and parsing the DOM.

- Total Byte Weight: The size of the files or content of response directly increases either the App cache time between `fetchStart` and `domLoading` or `domContentLoaded` if the resource can be cached in the client or the response time between `responseStart` and `responseEnd` if caching can only be done outside the client or not at all.
- Time to First Byte: navigationStart --> responseStart: Some of the navigation timings can be summarized by the time to first byte. Everything from `navigationStart` to `responseEnd` is considered to be part of the time to first byte.
- Time to Interactive: The time until the page can be interactive is the time between `navigationStart` and `domInteractive`. Notably, the timing of `domInteractive` is not necessarily reliable because a DOM may become interactive, but the browser may not be yet, and resources may be still loaded. For example, a HTML skeleton may be interactive very quickly, but no content may be rendered for the user to see. ([source]( https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness))
- DomContentLoaded: navigationStart --> domContentLoaded: Similar to TTI, domContentLoaded measures the time from `navigationStart` to domContentLoaded. At this point, "all subresources apart from async script elements have loaded" ([direktes Zitat](https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness)) Notably, a high difference between TTFB and DomContentLoaded indicates a great size or at least long load time of subresources.
- navigationStart --> loadEventEnd: Also very interesting for this study is the total time spent imidiately after initial load of a page until all resources are loaded and the DOM's `onload` event also finished. This is the time from `navigationStart` to `loadEvent` and represents both the capability of the framework to optimize the usage of client and network resources on initial load and the prioritization of JavaScript execution by splitting unimportant code into async scripts. <!-- REVIEW: Is loadevent part of the 2nd kind of metrics -->
- Total Blocking Time: TBT is the total time spent in a browser with parsing and optionally resources that block the rendering process from finishing. This includes stylesheets and scripts without the async or defer tag. This metric directly represents the time before the user can fulfil its goal on initial load.
- Last Visual Change: The time from `navigationStart` until the last visual change above the fold (explanation?). <!-- TODO: animations?!?!?!-->
- Largest Contentful Paint: LCP is the time between navigation to the page and the time of rendering for the visually largest text or image element in the user's viewport. Optimization of this metrics requires an understanding of the page's content and element size within the viewport.

<!-- REVIEW: make this a list? -->
First, TBT is most likely slower with CSR frameworks because the code execution filling the HTML skeleton takes some time that is not necessary with SSR and Prerendering applications. On delayed pages this difference is expected to be nonexistent.

Second, the LCP probably won't differ across frameworks, but naturally across page. If a framework creates a faster result in LCP, it is expected to be a SSR or Prerendering framework because of it's expected faster TBT.

Third, CSR  differs from SSR and Prerender frameworks by Total Byte Weight similar to LCP. Although the index HTML document is much slimmer with CSR, the JS files are expected to be equally larger than server-side rendered and prerendered pages. It is probably almost equal in sum because the byte size of the page should be mostly made up from multimedia files such as images and videos, CSS and JavaScript files.

Fourth, the frameworks should be inversely seperated into groups by the time to first byte. Mostly likely CSR and Prerendering frameworks will be faster for this metrics because the web server can serve as a static fileserver and does not have to execute any code for SSR.

Fifth, because CSR page consist of only nearly empty HTML skeletons and links to JavaScript and CSS files, the TTI is expected to be much faster for CSR pages.
Lastly, the timing of the loadEventEnd event is not clearly predictable before testing. Only the expectation exists that newer frameworks perform better in this metric simply because they are newer and are expected to perform optimizations that go into a faster parsing and rendering of a web page. 

With these expectations it would be most interesting to see the differences between CSR and SSR frameworks. From the list of selected frameworks for this study, those frameworks with direct competitors are Nuxt compared with Vue.js as well as Next.js in comparison to React. Additionally, Angular and Svelte in the group of CSR frameworks shall be compared with the SSR framework group with Astro.

### Component Load Times

As a second category for interesting metrics, measurements that go into the seperation of HTML into components are grouped together. This category is designed to reflect the performance of the generated JavaScript rather than how much content can be rendered before responseEnd. To this end, measurement after responseEnd can be considered. Each update after that has be measured as a component updating. The following metrics are part of this category.

- responseEnd --> domLoadEventEnd: The time between `responseEnd` and `domLoadEventEnd` combines all render-blocking parsing and synchronized code execution and is therefore a combined indicator for the code performanceand general optimization.
- Observed First Visual Change: The first visual change (FVC) is an indicator for the start of visual rendering and a signal to a user that the page is working or loading. Usually this metric is less important than TTI.
- Observed Last Visual Change: The last visual change (LVC) is the most promising for this study as it indicates the end of the perceptable rendering process and therefore perceived load speed.
- MutationChange times: Time from initialization of the app with an predetermined HTML element such as `<main>` to an DOM-update. See below for a detailed explanation.
- Total Blocking Time: see above
- Time To Interactive: see above

Based on the intention of testing for these metrics, the following expectations were presented before tests.
First, Prerendered and SSR page are expected to have a faster FVC because the execution of any code for delayed components can start before any static elements have to be inserted to the DOM through JS code.
Second, CSR applications probably finish their LVC slightly earlier than other applications. The assumptions for this predictions is that every application starts long tasks only after the HTML document was parsed which takes longer for SSR and Prerendered pages.
As a result of these two expectations the observations of a `MutationObserver` most likely have a lower maximum and are less spread out for SSR and Prerendered pages, but start later than CSR pages because static elements do not have to be inserted in the DOM.
Third, as described above, the TBT is expected to be slightly greater for CSR than for SSR or Prerendered applications and fourth, CSR apps should have a slower TTI.

With these metrics, identifying bloated applications and components is a goal. JavaScript that is loaded, parsed and executed that increases the initial load of a page should be indicated through these test. Such unnecessary or render-blocking scripts are pointed out through TBT and little difference between FVC and LVC. For example, if a script is executed before rendering that only defines functions, initializes objects that are not yet needed or creates a blocking dependency chain, the script can be considered unnecessary for initial load. 

### Component Update Times

The third category of metrics for this study, another kind of event and therefore DOM update is grouped together. Events triggered by user inputs influence the user experience if they lead to DOM updates. For this category, only two measurements can be made to gain insight into update speed, although three measurement are possible. 

- State Change Time: The time of state changes after user input. This is usually not automatically directly testable because the internal functionality of the framework is not always observable. 
- MutationChange times: Time of a mutation from user input within a predetermined HTML element such as `<main>` to an DOM-update. A `MutationObserver` is initialized an all update times are recorded. Designated updates to the DOM are added elements, removed elements and attribute updates.

For this category of metrics, no expectations could be formulated before testing because the speed of an update is purely based on the implementation within in the framework. This implementation is not openly accesible without knowledge of the frameworks' source code. Still, some predictions can be made independently from a specific framework. Apps that represent their state in the DOM, e.g. an 'edited' state for user inputs or always project in the value of an `<input>` on the DIM, will most likely have

1. more entry in recorded DOM mutations and...
2. a later last entry in recorded DOM mutations.

Also, the implementation of the app shows differences here as additional elements, such as `<div>` elements as wrappers for each component can influence the time and number of updated elements.

<!-- - Interesting comparisons with reasoning and expectation
    - MPA vs SPA
    - Angular vs React vs Vue
    - Nuxt vs Vue und Next vs React
    - Vue-basiert vs React-basiert
    - Svelte vs Astro -->
 
---

To summarize some comparisons between frameworks or groups of frameworks are most appealing for the evaluation through these metrics:

1. CSR vs SSR/Prerendered: Before testing, differencees between CSR and Prerendered pages are expected, but the metrics and amount of difference are a probably subject of interest. Because there is no perceivable difference between prerendered pages and server-side rendered pages from a client perspective, they are grouped together in this context.
2. Angular vs React vs Vue: Because these CSR have been competing for `X` years at this point and they are still the most famous front-end frameworks<!-- TODO: source -->,
the comparison of these frameworks is relevant for this study.
3. Nuxt vs Vue.js: As a next generation of the Vue.js framework, the actual performance increases are interesting for developers.
4. Next.js vs React: Same reason
5. Vue-based vs React-based: Because a direct comparison of frameworks based on React and based on Vue.js is possible with multiple candidates, a difference in performance is an actual relevant factor in the choice between the ecosystems.
6. Svelte vs Astro: As the most modernly popular frameworks in the selection of frameworks, Astro and Svelte have the potential to both outdo their contenders (/competitors) and to outdo each other. For fans of new tools and the development teams of the frameworks themselves.