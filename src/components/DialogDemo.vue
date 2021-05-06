<template>
    <h1>Dialog 示例</h1>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
</template>

<script lang="ts">
    import Demo from './demo.vue';
    import Dialog1Demo from './dialog1.demo.vue';
    import Dialog2Demo from './dialog2.demo.vue';
    export default {
        name: "DialogDemo",
        components:{Demo},
        setup(){
            return {
                Dialog1Demo,
                Dialog2Demo}
        }
    }
</script>

<style scoped>

</style>
