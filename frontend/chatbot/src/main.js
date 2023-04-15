import Vue from "vue";
import babelPolyfill from 'babel-polyfill'
import App from "./App.vue";

new Vue({
  el: "#app",
  render: h => h(App)
});
