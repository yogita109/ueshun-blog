<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer }
}
</script>

<style>
#app {
  background-color: transparent;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
