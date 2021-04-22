<template>

  <div>导航栏 |
    <router-link to="/">Frank</router-link> |
    <router-link to="/xxx">Frank2</router-link>
    <hr/>
    <router-view></router-view>
  </div>

</template>

<script>
import frank from './components/frank.vue'

export default {
  name: 'App',
  components: {
    frank
  }
}
</script>
