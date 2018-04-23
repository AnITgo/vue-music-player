import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
