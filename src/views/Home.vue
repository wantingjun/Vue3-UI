<template>
    <div>
        <Topnav></Topnav>
        <div class="banner">
            <h1>咕噜ui</h1>
            <h2>一个厉害的ui框架</h2>
            <p class="actions">
                <a>Github</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Topnav from "../components/Topnav.vue";
    export default {
        name: "Home",
        components:{Topnav}
    }
</script>

<style lang="scss" scoped>
    .topnav {
        background: pink;
        display: flex;
        padding: 16px;
        > .logo {
            max-width: 6em;
            margin-right: auto;
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;
            > li {
                margin: 0 1em;
            }
        }
    }
</style>
