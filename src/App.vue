<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
#app {
  background-color: transparent;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: auto;
}
</style>
