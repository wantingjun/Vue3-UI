<template>
<div>
   <Topnav></Topnav>
    <div class="content">
        <aside>边栏</aside>
        <main>main</main>
    </div>
</div>
</template>

<script lang="ts">
    import Topnav from "../components/Topnav.vue";
    export default {
        name: "Doc",
        components:{Topnav}
    }
</script>

<style scoped>

</style>
