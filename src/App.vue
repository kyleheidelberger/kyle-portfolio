<template>
  <div id="app">
    <Welcome />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'app',
  components: {
    Welcome,
    Projects,
    Footer
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
