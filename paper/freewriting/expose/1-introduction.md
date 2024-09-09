# Introduction

## Outline

- What is the current situation?
  - challenges of modern web sites
- Why am I doing this?
  - performance expectations of users and stakeholders
  - performance measurements for webpages
  - developer problems with framework choice
- What should be done?
  - need for comparative study of framework performance from a user's perspective
  - metrics
  - tooling to comparing render performance

## Content

Throughout the evolution of the world wide web, development of websites became more complex, both in the complexity of the page content and the functionality. This complexity resulted in higher demand for technical sophistication in hosting services and development tools. Although modern frameworks provide technical advancements to increase speed of page and content generation and arguably a better developer experience, there is no apparant way to objectively determine a "best framework" in terms of developer esperience.

When it comes to user experience and perceived user experience however, there are plentiful collections of metrics and criteria to choose from so as to determine the performance of websites, not frameworks. The optimization of websites has become a goal during development because it has a real effect on SEO and user behaviour. Both effects create business interests and financial incentives to invest resources into performance optimization (sources). Past research and existing tools as well as guides give direction to optimize websites according to stakeholders' and users' expectations and in most cases only focus on specific websites or specific frameworks. 

However, the lack of research on the effect of the framework on website performance indicates a need for research on the topic. Relying on marketing material for the choice of framework is questionable because most modern frameworks claim to be fast, easy to use and performance efficient. This suggest that each would be a great choice. Comparing frameworks presents a challenge because no ideal set of metrics for this use case is apparant and there are no publicy available replicas of web applications built with different frameworks. Therefore, a comparative study between the same website built with different web development frameworks is needed. With this data, an informed choice might be made for projects in the future. The goals of this thesis are to propose a set of metrics that allow comparing mainstream JavaScript frameworks for web applications, to provide a comparative study between selected frameworks and to create a tool to compare the rendering performance a web page as awhole and of dynamic components within a page.