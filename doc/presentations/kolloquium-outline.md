1. Was ist ein JavaScript Framework?
   1. Wie entstehen Webseiten im Entwicklungsprozess?
   2. Welche Rolle spielt ein JS Framework?
2. Aufbau der Testumgebung?
   1. Welche Frameworks?
   2. Beispielanwendung
      1. Seiten
      2. Komponenten
   3. Hosting
   4. Metriken
   5. Test-Tools
      1. -> Browsers
3. Ergebnisse
   1. PLT
      1. TTFB
         1. nicht überraschend, weil lokal schneller
      2. TBW
         1. Nuxt, insb. generate, schlecht
         2. Astro und Svelte gut
      3. TTI
         1. Nuxt, insb. build, schlecht
         2. React stark abhängig von Page und Hosting
         3. Astro gut
      4. DomContentLoaded
         1. stark abhängig vom Host
         2. Astro auf Vercel schlecht
      5. TBT
         1. Abhängig von der Seite mehr als vom Framework
         2. Next.js / Angular z.T. schlechter als andere
      6. LCP
         1. Vercel generell schneller
         2. Angular schlecht
         3. Astro gut
         4. Svelte auf Vercel gut
      7. OLVC
         1. Page ist ausschlaggebend
         2. Nuxt auf der Feed Page deutlich langsamer
   2. CLT
      1. Balanced LoadEventEnd
         1. Was, Warum?
         2. Firefox aus unerfindlichem Grund braucht lange, um requestStart zu machen
         3. Astro in Desktop und Mobile Safari am langsamsten
         4. Svelte sonst langsamer als andere Frameworks
         5. In Firefox sind alle außer Nuxt und Vue.js unberechenbar
      2. OFVC
         1. Lokal deutlich schneller
         2. Astro, Angular, Nuxt und Vue.js z.T. schlechter
      3. OVCD
         1. Was, Warum?, weil OFVC vom Network Delay beeinflusst wird
         2. Vue.js, React, Angular generell schneller
            1. Warum?
      4. Mutation Times
         1. Wie gemessen?
            1. Skripte
            2. Playwright
         2. Abhängig vom Browser
         3. Fehlende Messdaten
   3. CUT
      1. Mutation Times
         1. Welche User Actions?
         2. Overall
            1. Next.js deutlich langsamer
            2. Desktop Safari und Mobile Safari deutlich langsamer
            3. Firefox etwas langsamer
            4. Microsoft Edge und Google Chrome schneller
      2. Min, Max, Avg pro Framework und Browser
      3. Browser-Ranking
         1. Google Chrome
         2. ME
         3. Chromium
         4. Mobile Chrome
         5. Firefox
         6. Mobile Safari
         7. Desktop Safari
      4. Framwork-Ranking
         1. Nuxt
         2. Angular
         3. Vue.js
         4. Astro
         5. React
         6. Svelte
         7. Next.js
4. Zusammenfassung
   1. Nicht schlüssig bzgl. PLT & CLT
   2. CUT zwar deutlich, aber weniger deutlich als erwartet und für die Arbeit erhofft
   3. Test-Methode
      1. Messungsanfang und -ende kann noch optimiert werden
         1. Warum?
         2. Wie?
      2. Test Runs
         1. Wegen Schwankungen
      3. Mehr Seiten, Hosting Environments
      4. Navigation zwischen den Seiten