<template>
  <v-app id="inspire" dark>
    <app-header/>
    <router-view/>
    <app-footer/>
  </v-app>
</template>

<script>
import AppHeader from './components/common/Header'
import AppFooter from './components/common/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
