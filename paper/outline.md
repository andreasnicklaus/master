<h1>Paper Outline</h1>

- [Introduction](#introduction)
- [Related work](#related-work)
  - [Measurements / Metrics](#measurements--metrics)
  - [Networking / Protocols](#networking--protocols)
  - [Client Optimization](#client-optimization)
- [Design](#design)
  - [Example application](#example-application)
  - [Hosting environments](#hosting-environments)
  - [Testing tools](#testing-tools)
- [Implementation](#implementation)
  - [Component code](#component-code)
  - [Test code](#test-code)
- [Evaluation](#evaluation)
  - [Page load times](#page-load-times)
  - [Component load times](#component-load-times-1)
  - [Component Update times](#component-update-times-1)
- [Conclusion](#conclusion)
- [Summary](#summary)


# Introduction

1. Web is no longer simply static content.
2. Development is no longer writing a handful of files served to the web as-is.
3. Multiple established frameworks mainly in JavaScript.
4. Developer Experience (DX) is different between every single one.
5. Experienced User Experience (UX) can be similiar by used development framework.
6. Performance of built websites are dependend on the user's machine, the used browser, other networking hardware, the server-site hardware and the development framework.
7. Many combinations are possible and on 'perfect' combination is clearly visible as reasonable people can disagree.
8. Choice of development framework can be important depending on the web app, but marketing material suggests that every single current mainstream framework is a 'perfect' choice.
9.  Relevant metrics have to be at least outlined to compare frameworks.
10. Comparative studies are needed to make an informed choice.
11. There is a market niche for a testing environment that points components or parts of a website that perform poorly.


# Related work

## Measurements / Metrics

- list of metrics
- selections of metrics
- usage of metrics
- problems with metrics
- interpretation of metrics

---

- WebProphet: Automating Performance Prediction for Web Services
  - 100ms delay -> 1% sales loss
  - 500ms dealy -> up to 20% sales loss
  - Outline page load time
  - Object dependencies
  - Outline network delays
- Web prefetching performance metrics: A survey
  - problems with possible comparisons:
    - underlying baseline system
    - workload
    - key metrics
  - proposes key metrics for prefetching (considerations used in this thesis)
  - latency per page is better for user's POV
- A survey of Web metrics
  - quality vs usefulness of a web page
  - content-based quality (relations between pages)
- Web analytics tools and web metrics tools: An overview and comparative analysis
  - metrics should be chosen based on objective goals
- Using WebPageTest
  - Interpretation of Lighthouse reports
- Web Performance Pitfalls
  - Page Load Time is used for user-perceived quality of experience
  - Object count and byte size is relevant
  - Pitfalls: Redirects, Object sizes, Object count, Data source availability
  - Guidelines (used in this study)
- Seven pitfalls to avoid when running controlled experiments on the web
  - long-term metrics (customer lifetime value) are recommended
  - list variants and ambiguities for both robots and humans
- What-If Analysis of Page Load Time in Web Browsers Using Causal Profiling
  - PLT: Network activities + Computation activities
  - Browser performance is critical (esp. mobile browsers [0.5%])
  - separate Styling, JS and Layout rendering
  - Caching is important, esp. for slow connections

## Networking / Protocols

- Analyzing factors that influence end-to-end Web performance
  - List of factor
  - Methods:
    - Multiple clients
    - Multiple hosting services / server sites
- High Performance Browser Networking
  - Delays: Propagation, Transmission, Processing, Queueing
  - Factors: Number of request, Network speed, Ping
  - Performance best practices
- Measuring and mitigating web performance bottlenecks in broadband access networks
  - last-mile latency is important
  - lists components of retrieval time for each object
  - Caching is important

## Client Optimization

- On Landing and Internal Web Pages: The Strange Case of Jekyll and Hyde in Web Performance Measurement
  - Selecting pages for testing is not easy because no usage data is available
  - Sitemaps are only hints.
- Integrated Approach to Web Performance Testing: A Practitioner’s Guide
  - Tests should be based on stakeholders' expectations of load time
  - Classification of web pages based on complexity and interactivity
  - bail out percentage in ralation to load time
  - attributes of a good benchmark
- Performance comparison of dynamic web platforms
  - WWW changed from static content-distribution to interactive, dynamic medium
- View-Centric Performance Optimization for Database-Backed Web Applications
  - performance based on data-processing
  - is data loaded and not used
  - is rendering delayed by data-processing
- Dynamic thread assignment in web server performance optimization
  - dynamically created (non-cacheable) data needs computational ressources
  - parallelization helps with dynamic pages
- Measuring Web Latency and Rendering Performance: Method, Tools, and Longitudinal Dataset
  - Web Quality of Service vs Web Quality of Experience
  - Rendering measurements
- Effects of Web Page Contents on Load Time over the Internet
  - 1 second -> 16% decrease in customer satisfaction
  - Images are about 76% of the total web page size
  - PLT is mostly based on content rather than client and network conditions
- Load testing of Web sites
  - customer expectation: availability and response time
  - many factors on the customers perceiption of response time

# Design
## Example application
1. App Idea
2. Pages
3. Page intention & type
4. Multimedia Files & Video Autoplay

## Hosting environments
1. Vercel
   1. Reason
   2. Problems
   3. Solutions
2. Local
   1. Reason (Network delay)
   2. Problems

## Testing tools
1. Introduction into Playwright
2. Introduction into Lighthouse CLI

### General page performance metrics
1. Lighthouse performance
2. Page weight
3. Largest/First Contentful/Meaningful Paint
4. TTFB/TTI/SpeedIndex

### Component load times
1. Dom Updates with MutationObserver
2. Problems with MutationObservers and Playwright

### Component update times

- Interesting comparisons with reasoning and expectation
  - MPA vs SPA
  - Angular vs React vs Vue
  - Nuxt vs Vue und Next vs React
  - Vue-basiert vs React-basiert
  - Svelte vs Astro
- Page Load Times

# Implementation
## Component code

For each component unoptimized and optimized version

1. MediaComponent
2. About Aufbau
3. Post mit und ohne Daten
4. Astro CreateForm

## Test code

- Test categories
  - Page Load
  - Dynamic Component Load Times
  - State Change Times
- Playwright test configuration
- Browser Choices: Reasoning and test implementation

# Evaluation
## Page load times

1. Which pages load fast?
2. How much does much post-rendering-data add to load time?
3. Which frameworks creates fast-loading pages?
4. Does it match my expectations?

## Component load times

1. Which components load with delay?
2. Which frameworks have fast-loading delayed components?
3. Do pre-rendered pages even have delayed components?

## Component Update times

1. Which differences can be made out towards [Component update times](#component-update-times)?
2. Which HTML-Elements even update?
3. Which frameworks update HTML-Elements faster than others?

# Conclusion
1. Which framework works best with page load times?
2. Which framework works best with component load times?
3. Which framework works best with component update times?

# Summary