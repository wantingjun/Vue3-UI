<template>
    <router-view></router-view>
</template>

<script lang="ts">
// import frank from './components/frank.vue'
import {ref,provide} from 'vue'

export default {
  name: 'App',
  setup(){
      const menuVisible = ref(false)
      provide('xxx', menuVisible) //set
  }

}
</script>
