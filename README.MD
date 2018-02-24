# vue-dist
![alt text][vueversionbadge] ![alt text][licencebadge] 

Vue.js UMD distribution-only package

---

__Hint:__ If you are looking for Vue.Js please use the official repository [@vuejs/vue](https://github.com/vuejs/vue)

## Reasons to use this package
- When you are packaging Electron _without_ modular bundlers like webpack
- For a modular loader on the client side (Seajs, RequireJS)
- Your crazy experimental pet-project

## NODE_ENV
If `NODE_ENV=development` is set the packages uses the `vue.js` file instead of `vue.min.js`.

## Example snippet
``` javascript
const Vue = require('vue-dist')

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

[licencebadge]: https://img.shields.io/github/license/hammster/vue-dist.svg "Licence"
[vueversionbadge]: https://img.shields.io/badge/Vue.js-2.5.13-green.svg "Provided Vue.js version"