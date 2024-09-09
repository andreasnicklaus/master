export default {
  runsPerProject: 20,
  preferredServeCommand: "serve",
  projects: [
    {
      name: "Angular on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-angular/vercel",
      url: "https://ig-clone-angular-alpha.vercel.app",
      // url: "https://ig-clone-angular.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Astro on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-astro/vercel",
      url: "https://ig-clone-astro-ebon.vercel.app",
      // url: "https://ig-clone-astro.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Next.js on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-next/vercel",
      url: "https://ig-clone-next-alpha.vercel.app",
      // url: "https://ig-clone-next-omega.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "React on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-react/vercel",
      url: "https://ig-clone-react-xi.vercel.app",
      // url: "https://ig-clone-react-theta.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Nuxt (build) on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt/vercel",
      url: "https://ig-clone-nuxt-iota.vercel.app",
      // url: "https://ig-clone-nuxt.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Nuxt (generate) on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt-generate/vercel",
      url: "https://ig-clone-nuxt-generate.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Svelte on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-svelte/vercel",
      url: "https://ig-clone-svelte.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Vue.js on Vercel",
      reportDirectory: "./lighthouse-reports/ig-clone-vue/vercel",
      url: "https://ig-clone-vue-rho.vercel.app",
      // url: "https://ig-clone-vue.vercel.app",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Angular",
      projectPath: "../ig-clone/ig-clone-angular",
      buildCommand: "npm run build",
      serveCommand: "serve -s dist/ig-clone-angular/browser",
      reportDirectory: "./lighthouse-reports/ig-clone-angular-autoplay/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Astro (mixed)",
      projectPath: "../ig-clone/ig-clone-astro",
      buildCommand: "npm run astro build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-astro-mixed/localhost",
      url: "http://localhost:4321",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Astro (duplicate)",
      projectPath: "../ig-clone/ig-clone-astro",
      buildCommand: "npm run astro build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-astro/localhost",
      url: "http://localhost:4321",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Next.js",
      projectPath: "../ig-clone/ig-clone-next",
      buildCommand: "npm run build",
      hostCommand: "npm run start",
      reportDirectory: "./lighthouse-reports/ig-clone-next/localhost",
      url: "http://localhost:3000",
      paths: [
        "/",
        "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Nuxt (build)",
      projectPath: "../ig-clone/ig-clone-nuxt",
      buildCommand: "npm run build",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt-optimized/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Nuxt (generate)",
      projectPath: "../ig-clone/ig-clone-nuxt",
      buildCommand: "npm run generate",
      hostCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-nuxt-generate/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "React",
      projectPath: "../ig-clone/ig-clone-react",
      buildCommand: "npm run build",
      serveCommand: "serve -s build",
      reportDirectory: "./lighthouse-reports/ig-clone-react-video/localhost",
      url: "http://localhost:3000",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Svelte",
      projectPath: "../ig-clone/ig-clone-svelte",
      buildCommand: "npm run build",
      serveCommand: "npm run preview",
      reportDirectory: "./lighthouse-reports/ig-clone-svelte/localhost",
      url: "http://localhost:4173",
      paths: ["/", "/about", "/create", "/user/@PeterPoster"]
    },
    {
      name: "Vue.js",
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
