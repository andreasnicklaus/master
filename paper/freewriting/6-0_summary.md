# Summary

## Outline

1. Which framework works best with page load times?
   1. Next, Astro Svelte small TBW
   2. TTFB page-specific and host-specific (only Astro, Next, Nuxt and Angular sometimes bad)
   3. TTI: Astro!, Svelte, Next and Vue are fast (Astro, Angular, Svelte, Nuxt and Vue fluctuate little)
   4. domContentLoaded: Vue, React and Nuxt-generate are fast
   5. TBT: Astro and Svelte fast
   6. OLVC: Vue and React are fast, Nuxt is slow
   7. LCP: Astro often faster than others
   8. Raw loadEventEnd shows clear differences (Astro and Svelte slow, Vue and React and Nuxt are fast)
   9. Balanced loadEventEnd highlights same frameworks, but Svelte is fast (Vue and React still fastest). Browser makes the difference as well
2. Which framework works best with component load times?
   1. see TBT, OLVC, TTI, loadevent
   2. OFVC: Astro, React and Next are fast
   3. OVCD: Vue, React and Angular are fast
   4. DOM mutations: Angular is very fast, Astro, Vue and React relatively fast
3. Which framework works best with component update times?
   1. Nuxt, Vue and Svelte are economical with DOM mutations upon user input
   2. All frameworks are close to each other except in Mobile Safari and Webkit
   3. In these browsers, Next is slow, Nuxt is very fast
   4. Clear Ranking of the browser:
      1. Google Chrome
      2. Microsoft Edge
      3. Chromium
      4. Mobile Chrome
      5. Firefox
      6. Mobile Safari
      7. Webkit
   5. Ranking of the frameworks:
      1. Nuxt
      2. Angular
      3. Vue.js
      4. React
      5. Astro/Svelte
      6. Next.js

## Content

The previous chapter has given results to proposed measurements. The purpose of this chapter is to summarize the results as to which framework performes well in which metric category and which in which browser the applications perform well.

Concerning the page load behaviour, the metrics do not favor any one framework. Frameowrks that have fast load times when being inspected through one metric, demonstrate slow performances in other metrics. IN the TBW, Next.js, Astro and Svelte are the leading frameworks with their small size. Svelte, next.js, Vue.js and especially Astro have fast TTI results in this application and Astro, Angular, Svelte, Nuxt and Vue.js stand out through little fluctuations across pages and test repetitions. Astro and Svelte also beat their competitor frameworks in TBT. In contrast, Vue, React and Nuxt are the fastest frameworks when the domContetnLoaded or the raw loadeventend are timed. These metrics show the weaknesses of Astro and Svelte. Vue.js and React are also the fastest frameworks in OLVC. Within these metrics, rankings of the frameworks can be created, even if the rankings to not match across metrics. The TTFB also shows a dependency on the page and host, which mainly influences the results. However, Astro, Next.js and Nuxt and Angular show slow results. The balanced loadeventend highlights Vue and React postively, but also demonstrates the differences the browsers make.

The metrics for the component load time have a similar characteristic. The overlapping metrics TBT, OLVC, TTI and loadeventend focus positively on AStro, Svelte, Vue.js, React and Next.js, but not all have good results in all metrics. The OFVC of the applications are early in Astro, React and Next.js. Only React translates this dominant property over its frameworks to OVCD, where it is joined by Vue.js and Angular. This framework-grouping  property of OFVC, OLVC and OVCD is due to the fact that performing well in all three metrics is very difficult to achieve. The recordings of early DOM mutations favor Angular, Astro, Vue.js and React based on their fully prerendered or fully server-side rendered nature.

In contrast, the measurements made for the component update times do indicate clear rankings of frameworks and browsers. Nuxt, Vue.js and Svelte are very economical with DOM updates. The other tested frameworks Next.js, React, Angular and Astro mutate the DOM more often. However, the times of mutations are close to each other except in Mobile Safari and Webkit. In only these two browsers, Next.js is slow and Nuxt is the fastest framework. The recorded times of DOM mutations permit the creation of rankings of browsers and frameworks. The browsers rank fastest to slowest Google Chrome, Microsoft Edge, Chromium, Mobile Chrome, Firefox, Mobile Safari and then Webkit. Judging from this rankings, Google Chrome is the easiest browser to test below a predefined time budget and Webkit is the most challenging browser to achieve performance goals in.
The resulting ranking of browsers for the component update times of the example application based on the Android Instagram app is from fastest to slowest Nuxt, Angular, Vue.js, React, Astro/Svelte and Next.js. This ranking can influence the choice of frameworks for user input heavy applications. For this kind of web application, Nuxt, Angular and React present themselves as the best choices in the regard of component update times.