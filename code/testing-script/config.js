export default {
  runsPerProject: 20,
  preferredServeCommand: "serve",
  projects: [
    {
      name: "IG clone with Angular on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-angular/vercel",
      url: "https://ig-clone-angular.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Astro on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-astro/vercel",
      url: "https://ig-clone-astro.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Next on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-next/vercel",
      url: "https://ig-clone-next-omega.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Nuxt on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt/vercel",
      url: "https://ig-clone-nuxt.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with React on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-react/vercel",
      url: "https://ig-clone-react-theta.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Vue on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-vue/vercel",
      url: "https://ig-clone-vue.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Angular",
      projectPath: "../ig-clone/ig-clone-angular",
      buildCommand: "npm run build",
      serveCommand: "serve -s dist/ig-clone-angular/browser",
      reportDirectory: "./lighthouse-reports/ig-clone-angular/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Astro",
      projectPath: "../ig-clone/ig-clone-astro",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-astro/localhost",
      url: "http://localhost:4321",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Next",
      projectPath: "../ig-clone/ig-clone-next",
      buildCommand: "npm run build",
      hostCommand: "npm run start",
      reportDirectory: "./lighthouse-reports/ig-clone-next/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Nuxt",
      projectPath: "../ig-clone/ig-clone-nuxt",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with React",
      projectPath: "../ig-clone/ig-clone-react",
      buildCommand: "npm run build",
      serveCommand: "serve -s build",
      reportDirectory: "./lighthouse-reports/ig-clone-react/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "IG clone with Vue",
      projectPath: "../ig-clone/ig-clone-vue",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      serveCommand: "serve -s dist -l 4174",
      reportDirectory: "./lighthouse-reports/ig-clone-vue/localhost",
      url: "http://localhost:4174",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
  ]
}
