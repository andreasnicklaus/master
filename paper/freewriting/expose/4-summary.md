# Summary

## Outline

- "Results are not clear"
  - fluctuations vs result differences
- Rankings of frameworks
- Rankings of browsers
- Future work
  - recording initialization & end
  - navigation
  - solutions for not-applicable components (fast and slow)
  - more repetitions, pages, hosting environments

## Content

The results of the study are non-conclusive for the metrics in relation to page and component load time. The measurements only show general advantages of a single frameworks over others for the component update time. Nuxt is the fastest browsers in regards to component update time, whereas Next.js is the slowest. Google Chrome turns out to be the fastest browser for component updates and these updates are slowest in Desktop Safari.

Due to these fluctuating results, future work should focus on making these results more reliable. Reliability might be achieved through repetition of the tests with more repetitions and hosting environments. Additional pages might outline dependencies of the performance on the type of web page.
Continuations of this study could also expand the user action to other interactions than filling a form. A preferred expansion of user action includes navigation between pages.

Solutions to problems with this study should lead to a better initialization and end of recording for DOM mutations. Currently, some mutations are not registered and the end time of recording is arbitrarily set. For this reason, early mutations, purposefully repeating mutations and very late mutations are not recorded properly.