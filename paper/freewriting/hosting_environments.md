# Hosting Environments 

## Outline

- Based on former work, networking plays a vital role in performance and load times
- What exactly should **be** tested?
- What requirements do the environments have to cover?
- What properties should be considered for the environments?

1. Vercel
   1. Reason
   2. Problems
   3. Solutions
2. Local
   1. Reason (Network delay)
   2. Problems

## Content

Network delay is a great part of render delay and performance issues. Loading large files in sequence will block rendering if parsing documents or executing code is dependent on network requests. The request delay is based on the speed of the web server, the size of the generated file or response and the network speed.

The testing should cover real-world hosting and local hosting to see how much network delay is making up. Results are indicators, not value that are equal everywhere.

Test should include page load time from start of the first request to `documentLoadEvent`, delayed load times from `responseEnd` to `documentLoadEvent` and dynamic component update times from user input to last DOM update.
Every one of these may trigger a network request and therefore should all be tested with distant servers and local servers.

Requirements for hosting environments are active server capability for SSR or something similar and it is supposed to be a widely used hosting environment or service to ensure real-world applicability of the study. It is important that it is also usable for small projects, so a free version should be available and integrated into CI/CD, as it is a wide-spread development practice. As such, it was important that the least possible manual configuration for the hosting environment had to be done because this is not supposed to be a study of configurability, but rather to how much performance optimization would be done "out of the box" by the frameworks and continuing with that sentiment by the hosting service. This would be the only way to answer the question "With which framework do I get the best performance without spending much or any time with optimization and configuration?".

Because of personal experience with it and personal preference, Vercel was chosen to be the hosting environment for distant web servers. Each project then was given its own Github repository, which was connected to a Vercel project. During configuration and the first preliminary tests, one problem with Vercel's free account quickly become appearent: the bandwidth limitations of 100GB per month. This limit was reached after 2 weeks of testing unoptimized versions of the applications with large image and video file sizes. The solution to this was the creation of a second free Vercel account and the plan to create yet another if this problem became a problem again, which it did not.

The seconds hosting environment used for this study was running the application's server locally. If the tested framework supports a "preview" mode, it was started and tested. If not, then the application would be build and served using the `serve` command or an active server would be started with `node <filename>`. If that these two options would be for any reason still unavailable, then the "dev" mode would be used.

(see below for a tabular view of the build/host commands used for each framework)