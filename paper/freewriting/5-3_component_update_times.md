# Component Update Times

## Outline

1. Which differences can be made out towards [Component update times](#component-update-times)?
2. Which HTML-Elements even update?
3. Which frameworks update HTML-Elements faster than others?

- User Input times
- State change times
- Mutation times

## Content

Section 4.2 defines the update time of a component using the user input time, the state change time and mutation time. However, the state change time is not observable without a white-box understanding of the application and the framework. Only the mutation times were used in this study to keep the method of measurement valid for as many applications and frameworks as possible. Because user input action is delayed and the zero-time is reset beforehand (see listing `x`, line `y`), the punctual initialization of the MutationObserver (see section 5.2) is not an issue when testing DOM mutations triggered by user inputs.

The number of total changes to the DOM per user action are displayed in table `x`. It is clear that the frameworks can be split into three distinct groups by number of different mutations. This list intentionally does not count identical mutations such as appending another element to the list of `<span>` elements in the post caption of the preview. Angular and Next.js make the most changes to the DOM during the user actions with 14 and 15 recorded DOM mutations, respectively. The, both Astro and React have a similar number of mutations with nine mutations in total. This similarity is not surprising because the Astro island of the CreateForm consists of identical React components to the purely React application. The group of frameworks with the least DOM mutations only changes 6 different elements in the DOM in total. They are Nuxt, Vue.js and Svelte.
Tables `u`, `v`, `w` and `x` list the HTML elements that were mutated after user input for all four user actions. Surprisingly, the grouping of the frameworks does not translate directly to the specific elements. In general each described group does update similar elements with similar mutations, but they are not exact copies of each other in this regard.

Figure `x` presents the mutation times of each framework per browser with all recorded times across user actions. The first result for this study is that all frameworks do finish mutating the DOM within the predefined time budget of 500 ms. In addition, the maximum time for mutations is decidedly dependent on the browser. While Webkit is apparently the slowest browser for DOM mutations triggered by the user, especially with Next.js, almost all mutations in Chromium, Microsoft Edge and Google Chrome finish within the time limit for fastest mutations of 100 ms. Mobile Chrome also shows the same characteristic with the exception of some mutations Svelte and Next.js after the Post creation user action.

TODO: udpate the images

Figures `a`, `b`, `c` and `d` contain the update times of the four user actions per browser and framework. A few generalizations are possible to extract from these results.
For the captionchange (see figure `a`), Nuxt appears to be the fastest Framework on all browser except on Google Chrome where Next.js makes faster DOM mutations. Astro is also a relatively fast framework in Microsoft Edge and Google Chrome, but is one of the slowest frameworks in Webkit and Mobile Safari. In general, Nuxt, Next.js, Vue.js, React and Angular make DOM mutations in under 70 ms in Chromium, Mobile Chrome, Microsoft Edge and Google Chrome. Svelte on the other hand is apparently the slowest framework for this user action on average.

The recorded DOM mutation times for media selection can be found in figure `b`. Most of the mutations are below the 100 ms time limit with only few exceptions. Astro is slower than the limit in Webkit, Next.js is slower in Google Chrome, Mobile Safari and Webkit and Vue.js has an outlier measurement in Firefox. Here, Nuxt, Vue.js, React, Angular and Svelte behave similarly well to each other. Appart from the the mentioned outliers, the results from these frameworks lie between 38 and 85 ms.
The measurements for Media Source Insert are very similar to Media Selection (see figure `c`). Again, Nuxt performes very fast in all browsers and all frameworks are somewhat similar to each other except in Firefox, Mobile Safari and Webkit. The latter two are again the slowest browsers on average and firefox is the third slowest. In these browsers, Nuxt and Svelte are the fastest frameworks.
The Post Creation is the slowest user action to finish (see figure `d`), which is unsurprising because it is combined from two other actions. It is therefore impossible to finish faster than either single user action. The update times for each user action can even be seen by two groupings in the recordings. For this action, Next.js is clearly the worst framework in relation to its competitors, but this difference is only significant on Webkit and Mobile safari.
Across all user actions, applications mutate the DOM slowlest in Mobile Safari and Webkit, closly followed by Firefox. The other browsers Chromium, Mobile Chrome, Google Chrome and Microsoft Edge lie very close to each other and the average mutation times differ from each other at a maximum of 15 ms.

Table `x` lists the minimal and maximal mutation times of the frameworks in each browser, as well as the median average for each combination. In addition, the median averages and weighted averages of all minimum, maximums and averages of mutations in each browser and framework are calculated. The weighted averages are based on the usage percentages of browsers (see table `9`). These results indicate clearly that Next.js produces the slowest mutations both on average and weighted average. In contrast, Nuxt makes the fastest updates across browsers. Then, Angular comes in second, Vue is third and React is the fourth-fastest frameworks. The second-slowest framework on average is Astro, but it comes in faster in the ranking of frameworks than Svelte when the weights are calculated in.

As indicated earlier, Google Chrome and Microsoft Edge are the fastest and Webkit and Mobile Safari are the slowest browsers across frameworks on average. The highlighted fasted and slowest values for minimum, median and maximum recorded mutation times verify these assessements. The fastest times are all recorded in Google Chrome and the slowest in Webkit. Notably, both the slowest first mutation and the fastest average and last mutation are recorded in Astro.
Based on the average per browser, the ranking of fastest browsers in component update times is as follows:

1. Google Chrome
2. Microsoft Edge
3. Chromium
4. Mobile Chrome
5. Firefox
6. Mobile Safari
7. Webkit