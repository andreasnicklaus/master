<h1>Paper Outline</h1>

- [Introduction](#introduction)
- [Related work](#related-work)
  - [Client Optimization](#client-optimization)
  - [Measurements / Metrics](#measurements--metrics)
  - [Networking / Protocols](#networking--protocols)
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

## Client Optimization
## Measurements / Metrics
## Networking / Protocols

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

¯\\_(ツ)_/¯

# Implementation
## Component code

For each component unoptimized and optimized version

1. MediaComponent
2. Astro CreateForm
<!-- TODO: Add other components -->

## Test code
# Evaluation
## Page load times
## Component load times
## Component Update times
# Conclusion
1. Which framework works best with page load times?
2. Which framework works best with component load times?
3. Which framework works best with component update times?
# Summary