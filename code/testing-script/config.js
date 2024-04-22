export default {
  runsPerProject: 5,
  preferredServeCommand: "serve",
  projects: [
    {
      name: "IG clone with Angular on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-angular/vercel",
      url: "https://ig-clone-angular.vercel.app/"
    },
    {
      name: "IG clone with Astro on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-astro/vercel",
      url: "https://ig-clone-astro.vercel.app/"
    },
    {
      name: "IG clone with Next on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-next/vercel",
      url: "https://ig-clone-next-omega.vercel.app/"
    },
    {
      name: "IG clone with Nuxt on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt/vercel",
      url: "https://ig-clone-nuxt.vercel.app/"
    },
    {
      name: "IG clone with React on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-react/vercel",
      url: "https://ig-clone-react-theta.vercel.app/"
    },
    {
      name: "IG clone with Vue on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-vue/vercel",
      url: "https://ig-clone-vue.vercel.app/"
    },
    {
      name: "IG clone with Angular",
      projectPath: "../ig-clone/ig-clone-angular",
      buildCommand: "npm run build",
      serveCommand: "serve -s dist/ig-clone-angular/browser",
      reportDirectory: "./lighthouse-reports/ig-clone-angular",
      url: "http://localhost:3000"
    },
    {
      name: "IG clone with Astro",
      projectPath: "../ig-clone/ig-clone-astro",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-astro",
      url: "http://localhost:4321"
    },
    {
      name: "IG clone with Next",
      projectPath: "../ig-clone/ig-clone-next",
      buildCommand: "npm run build",
      hostCommand: "npm run start",
      reportDirectory: "./lighthouse-reports/ig-clone-next",
      url: "http://localhost:3000"
    },
    {
      name: "IG clone with Nuxt",
      projectPath: "../ig-clone/ig-clone-nuxt",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt",
      url: "http://localhost:3000"
    },
    {
      name: "IG clone with React",
      projectPath: "../ig-clone/ig-clone-react",
      buildCommand: "npm run build",
      serveCommand: "serve -s build",
      reportDirectory: "./lighthouse-reports/ig-clone-react",
      url: "http://localhost:3000"
    },
    {
      name: "IG clone with Vue",
      projectPath: "../ig-clone/ig-clone-vue",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      serveCommand: "serve -s dist -l 4174",
      reportDirectory: "./lighthouse-reports/ig-clone-vue",
      url: "http://localhost:4174"
    },
  ]
}