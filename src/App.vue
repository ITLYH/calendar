<template>
  <div id="app">
    <calender msg=""/>
  </div>
</template>

<script>
import calender from './components/calender.vue'

export default {
  name: 'app',
  components: {
    calender
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
  padding: 0;
}
body{
    margin: 0;
}
</style>
