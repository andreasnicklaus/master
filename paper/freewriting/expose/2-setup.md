# Setup

## Outline

- What frameworks are tested?
  - Selection parameters
  - List of frameworks
- What is the application?
  - 4 pages
  - screenshots
  - special components
    - Create page
    - MediaComponent
    - Astro
- Hosting environments
  - Selection parameters
  - Chosen hosts
- What metrics are used?
  - Page Load Times: TBW, TTFB, TTI, domContentLoaded, LoadEventEnd, TBT, OLVC, LCP
  - Component Load Times: TBT, TTI, OLVC, LoadEventEnd, OFVC, Mutation Times
  - Component Update Times: User Input Times, Mutation Times
- What tools can do that?
  - Tools: Lighthouse, Playwright (+Browsers)
  - Assigment of metrics to tools

## Content

One of the choices for the setup of the study is which frameworks to implement the application in and compare. The selected frameworks have to support the designed web application without the help of another tool or framework unless intended by the developers of the framework. Plus, the frameworks have to use JavaScript in order to narrow down the scope the study. TypeScript frameworks are allow because they support JavaScript (source). 

Basis for the framework selection is the rankings of most-used, most-liked and most-interesting web development frameworks and tools (source). The following frameworks were selected for this framework:

1. **Angular** 
2. **Astro** 
3. **Next.js** 
4. **Nuxt**
5. **React** 
6. **Svelte** 
7. **Vue.js** 

In addition, Preact, Solid and Qwik were considered to include in this study, were dropped because of negative sentiment or low usage among developers that have experience with the tools.

---

The web application used for this study is designed to be the subject of comparisons between frameworks. Its look is derived from of the Android app of Instagram (source) and it has four pages (see figure `x`). The four pages cover three generally valid page types identified in the design process. The About page is a "Static page" as it does not change its content after the initial response from the web server. No additional data query is needed to build the finished DOM structure. The Feed page and the Profile page are "Delayed pages". Their defining characteristic is that the DOM cannot be fully built from the initial HTML document, but need data queries to complete before the content can be displayed. These data queries are triggered immediately after the initial page request. The Create page is the only "Dynamic page". Even though its initial feature indicate it being either a static or delayed page, depending on the implementation, it has dynamic components that update through user input. Mutations to the DOM are therefore not triggered by the initial page request but user action. The time of such mutations is therefore not predictable.

These **four pages** are comprised of **15 components**, most of which are wrappers to encapsulate image components, styled text or iterate over lists with subcomponents. However, two components stand out because of their special purpose or implementation differences between frameworks.

1. The MediaComponent is design to encapsulate both internal and external images and video sources into a single component. It is used to display Profile images and Post content. Its main purpose is to decide - based on the passed source string - how to project the multimedia file onto the DOM. As such, a decision for enhanced image or video elements had to be made per framework during the implementation of the application. Svelte, Astro, Next.js and Nuxt provide such an enhanced image component. In contrast, video elements are inserted to the DOM as-is, but the browser behaviour is adapted identically for all frameworks using attributes on the `<video>` element and JavaScript. In addition, the import of local images differs between frameworks because the load behaviour differs. As such, some frameworks require importing all local images in order to select the requested image.

2. The Create page poses a challenge to Astro because it does not natively support dynamic components. The intended solution is to implement so-called "Islands" using another framework. React is chosen for its high usage rate amongst web developers (source). As a results two implementations are compared in this study: Using the React components that are needed for Astro Island everywhere, even if the component in question is not dynamic or creating duplicate Astro components for when a component is not required to be dynamic. As a result, one additional React component "CreateForm" was created in order to encapsulate React subcomponents and six components were implemented in React because they are part of the form and the Post preview on the Create page.

---

In order to test the end-products of the frameworks, at least one web server is needed to host the application. Previous work suggests that network delay is a great part of render delay and performance issues. For this reason, the tests for this study are performed on two different web servers: An online hosting service and the local testing machine.

1. **Vercel** was chosen for hosting the applications on distant servers based on its popularity, capabilities for SSR, support for both a free and paid version and its integration into CI/CD pipelines. EAch Vercel project was connect Only required project configuration options were change per project on the plattform to ensure its state as as-is.
2. A **Local host** was chosen to minimize the effect of network delay and related delays, e.g. domain name resolving, in this study. The application is hosted locally on the testing machine. The client device in question is a HP Envy x360 with and AMD Ryzen 5 5500U processer and 16 GB RAM. The OS on the device is Windows 11 Home (Version 10.0.22631) during testing. The application was build before every test and hosted using either built-in commands for the framework or using the `serve` command (see table `X`).

*Table with build and host commands*

---

To identify weaknesses of the frameworks and simplify the evaluation of the results, ten metrics were chosen in three categories to test the frameworks (see table `X`). The page load covers the classical load time of a web page and is specified to outline the load speed from requestStart to last change to page. This time frame is defined in this study using the TBW, TTFB, TTI, TBT, LVC, LCP, DomContentLoaded and loadEventEnd. The Component Load is defined by the OLVC, OFVC, TTI, TBT, LoadEventEnd and the times of DOM mutations. With these, any changes to the DOM with JS can be identified and show the rendering process of JS components. The Component Update describe the time between a user interaction and a DOM mutation. This time frame describes the speed of feedback to the user that the interaction has been registered and something is happening as well as the speed until that something finishes happening. Especially DOM mutation times are expected to show differences inbetween frameworks and implementations as the elements and internal implementation changes from one framework to another. 

*Table with assignemt of metrics to the metric categories (with full acronyms?)*

---

The requirements created by hosting the applications on two different web servers and the list of metrics are fulfilled by the Lighthouse CLI and Playwright. Both are required to output their results in human-readable and machine-readable format to support easy debugging and the creation of aggregate metrics.

1. Using the **Lighthouse CLI**, a script for starting the web server and running Lighthouse tests on the web application. These tests run 20 times and only cover the performance measurements of Lighthouse. Reports are created in both HTML and JSON format in order to debug the tests and create the mean average of every measurement. 
2. Tests with **Playwright** focus on the measurement of DOM mutations and the adherence to time budgets for the page load and component update times. To that end, a JS script is injected into the browser context before tests. This recording script initializes a MutationObserver on a specific HTML element that is created by the framework. This way, all DOM mutations such as element addition, element removal and attribute change are recorded with the id and xpath of the element and a time of the mutation.

Which metric is measured by which tool can be seen in table `x`.

*Table with assignemt of metrics to the test tools*