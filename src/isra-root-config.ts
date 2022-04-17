import { registerApplication, start } from "single-spa"

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: (location) => location.pathname === '/',
// })

registerApplication({
  name: "@isra/react-single-spa",
  app: () => System.import("@isra/react-single-spa"),
  activeWhen: (location) => location.pathname === '/react-single-spa'
})

registerApplication({
  name: "@isra/react-multiples",
  app: () => System.import("@isra/react-multiples"),
  activeWhen: ['/react-multiples']
})

registerApplication({
  name: "@isra/react-route",
  app: () => System.import("@isra/react-route"),
  activeWhen: (location) => location.pathname === '/react-route'
})

registerApplication({
  name: "@isra/react-lazy-load",
  app: () => System.import("@isra/react-lazy-load"),
  activeWhen: ['/react-lazy-load']
})

registerApplication({
  name: "@isra/react-header",
  app: () => System.import("@isra/react-header"),
  activeWhen: ['/']
})

start({
  urlRerouteOnly: true,
})
