# Implementation

## Outline 

- Project creation strategy
- Project separation strategy

- Goals: reproducability, interpretability, tracability of implementation choices

## Content

Each implementation with a framework was started using the official "get started" guide on the framework's website (SOURCES). Each website provide a command which creates a project directory and project files. The initialization options for the creation process were chosen with the following rules.

1. The project is to be created as empty as possible. No demo project are chosen if an option with less preconfigured files is available.
2. No testing tool is to be preconfigured except Playwright. If Playwright is not an option, then no testing tool should be chosen.
3. Otherwise the default option (recommended or first in the list) should be chosen. If "none" is an option, it should be selected.

After the initialization under these rules, the app's pages and components as well as routing between the pages were configured. After creation of the Vue.js and React app, the components template, code, and style information were either copied from their Vue.js or React counterparts and adapted to the framework in question to speed up the creation process. Only after this process, optimization methods such as configuring image components (see section 4.1) and adaptation for the hosting environment were performed.

Additionally, project directories were separated into Github repositories. This is a requirement for hosting with Vercel as a maximum of three Vercel projects can be hosted from the same repository. This study exceeds this limit. This limiting condition entails that all testing configuration could not be unified, but had to be duplicated across repositories. The setup of the testing environment has been the last step of project creation (see section 4.2).