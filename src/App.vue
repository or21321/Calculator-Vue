<template>
  <app-header></app-header>
  <calculator-app></calculator-app>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import calculatorApp from './pages/calculator-app.vue'
import appHeader from './cmps/app-header.vue'

export default {
  name: "App",
  components: {
    // HelloWorld,
    calculatorApp,
    appHeader
  },
};
</script>
