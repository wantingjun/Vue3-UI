<template>
    <div class="dialog-overlay"></div>
    <div class="dialog-wrapper">
        <header>标题</header>
        <main>
            <p>1</p>
            <p>2</p>
        </main>
        <footer>
            <Button>ok</Button>
            <Button>cancel</Button>
        </footer>
    </div>
</template>

<script lang="ts">
    import Button from './button.vue'
    export default {
        name: "dialog",
        components:{Button}
    }
</script>

<style scoped>

</style>