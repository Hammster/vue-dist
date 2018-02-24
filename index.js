/**
 * Determin which Vue.js file to load
*/
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  exports.default = require('./dist/vue')
} else {
  exports.default = require('./dist/vue.min.js')
}
