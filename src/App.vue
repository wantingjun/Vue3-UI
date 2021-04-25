<template>
    <router-view></router-view>
</template>

<script lang="ts">
// import frank from './components/frank.vue'
import {ref,provide} from 'vue'
import {router} from './router.ts'

export default {
  name: 'App',
  setup(){
      const width = document.documentElement.clientWidth
      let menuVisible = ref(width <= 500 ? false : true)
      provide('xxx', menuVisible) //set
      router.afterEach(()=>{
          if(width <= 500){
              menuVisible.value = false;
          }

      })
  }

}
</script>
