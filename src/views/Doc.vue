<template>
<div>
   <Topnav></Topnav>
    <div class="content">
        <aside v-if="menuVisible">
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/switch">switch 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">button 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">dialog 组件</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">tabs 组件 </router-link>
                </li>
            </ol>
        </aside>

        <main>main</main>
    </div>
</div>
</template>

<script lang="ts">
    import Topnav from "../components/Topnav.vue";
    import {inject, Ref} from "vue";
    export default {
        name: "Doc",
        components:{Topnav},
        setup(){
            const menuVisible = inject<Ref<boolean>>('xxx') //get
            console.log('topnav get menuVisible'+menuVisible.value)
            return {menuVisible}
        }
    }
</script>

<style lang="scss" scoped>
    aside {
        background: lightblue;
        width: 150px;
        padding: 16px;
        > h2 {
            margin-bottom: 4px;
        }
        > ol {
            > li {
                padding: 4px 0;
            }
        }
        @media (max-width:500px){
            position: fixed;
            top:0;
            left:0;
            padding-top:70px;
        }
    }
</style>
