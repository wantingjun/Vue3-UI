<template>
    <article class="markdown-body" v-html="start">
    </article>
</template>

<script>
    import start from '../markdown/start.md'
    export default {
        name: "start",
        data(){
            return {start}
        }
    }
</script>

<style scoped>

</style>