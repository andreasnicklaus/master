# Results

## Outline

- Page load times
  - Graphs
  - balanced LoadEventEnd + Graphs
  - Summary
- Component load times
  - OFVC
  - OVCD
  - Component load mutation times
- Component update times
  - DOM mutation times
  - MIn, Max, Avg, Weigh. Avg of recordings

## Content

Both metrics for the page load time and the component load time shown no clear generally applicable evidence for a single framework being better than the others. Such a distinction can only be made on a per-metric basis. Figure `X` presents the averages of measurements by Lighthouse per page and framework.

*Lighthouse results*

Next.js, Astro and Svelte are the leading frameworks in TBW and Svelte, Next.js, Vue.js and especially Astro have a fast TTI results. In addition, Astro, Angular, Svelte, Nuxt and Vue.js stand out through little fultuations in TTI across pages and test repetitions. The results of measurements for the Total Blocking Time also favors Astro and Svelte. In contrast, Astro and Svelte perform poorly in domContentLoaded and balanced LoadEventEnd. These metrics are strenghts of Vue, React and Nuxt. the balanced LoadEventEnd is balanced towards the requestStart (see equation `x`). Vue.js and React are also the fastest frameworks in OLVC. The Time To First Byte  does not allow a ranking of frameworks. Instead, it is more dependent on the page and the host, which influences the results more than the framework. However, Astro, Next.js and Angular stand out through slow results. The balanced LoadEventEnd hightlights Vue.js and React positively, but also demonstrates a high dependency on the browser.

*equation loadeventend*

The metrics for the component load time have similar characteristics. The OFVC of the applicatinos are early in Astro, React and Next.js, which indicates a strength of React-based frameworks. React, Vue.js and Angular also naturally have a short OVCD, which is defined as the time difference between the OFVC and OLVC (see equation `x`). The recordings of early DOM mutations are also very fast for Astro, Vue.js and React, whereas recordings are missing completely for Angular. This is most likely due to delayed initilization of the MutationObserver that is responsible for recording mutations.

*equation ovcd*

*graph ovcd*

In contrast, the measurements made for the component udpate times suggest clear rankings of frameworks and of browsers. The times of the DOM mutations are quite similar to each other except in Mobile Safari and Desktop Safari. In these browsers, Next.js isthe slowest and Nuxt is the fastest frameworks. Across all pages, the ranking of brwosers from fastest to slowest goes Google Chrome, Microsoft Edge, Chromium, Mobile Crhome, Firefox, Mobile Safari and Desktop Safari. This means, that time budgets are easiest to keep to in Google Chrome and testing in Desktop Safari is more challenging for the test subject. The ranking of frameworks is from fastest to slowest across pages Nuxt, Angular, Vue.js, React, Astro & Svelte and Next.js. In Addition Nuxt, Vue.js and Svelte are economical with DOM mutations after user interaction, whereas the other frameworks update the DOM in more ways. This ranking can influence the choice of framework for user input heavy applications. For this kind of application, Nuxt, Angular, Vue.js and React present themselves a sthe best choices in regard of component update times.