<template>
<div id='app'>
  <hello-world></hello-world>
  <!-- <cover></cover> -->
  <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Cover from './components/Cover.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Cover
  }
}
</script>
