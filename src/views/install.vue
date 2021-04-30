<template>
    <article class="markdown-body" v-html="install">

    </article>
</template>

<script lang = "ts">
    import install from '../markdown/install.md'
    export default {
        name: "install",
        data(){
            return {install}
        }
    }
</script>

<style scoped>

</style>