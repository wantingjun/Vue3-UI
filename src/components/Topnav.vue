<template>
    <div class="topnav">

        <div class="logo" >
            <router-link to="/">
            <svg class="icon" >
                <use xlink:href="#icon-pikachu"></use>
            </svg>
            </router-link>
        </div>

        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
            <svg v-if="toggleMenuVisible" class ="toggleIcon" @click="toggleMenu">
                <use xlink:href="#iconmenu" ></use>
            </svg>
    </div>
</template>

<script lang="ts">
    import {inject , Ref} from 'vue'
    export default {
        name: "Topnav",
        setup(){
           const menuVisible = inject<Ref<boolean>>('xxx') //get
            console.log('topnav get menuVisible :'+menuVisible.value)
            const toggleMenu =()=>{
               menuVisible.value = !menuVisible.value
                console.log('topnav get menuVisible :'+menuVisible.value)
            }
            return {toggleMenu}
        },
        props:{
            toggleMenuVisible:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color:#28d1c9;

    .topnav {
        color: $color;
        display: flex;
        padding: 16px;
        position:fixed;
        top:0;
        left:0;
        width:100%;
        z-index:10;
        justify-content: center;
        align-items: center;
        > .logo {
            max-width: 6em;
            margin-right: auto;
            svg{
                height:52px;
                width:52px;
            }
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
                margin: 0 1em;
            }
        }
        > .toggleIcon{
            width:32px;
            height:32px;
            position:absolute;
            left:16px;
            top:50%;
            transform: translateY(-50%);
            display:none;
        }
         @media (max-width:500px){
             > .menu{display:none;}
             > .logo{margin:0 auto}
             > .toggleIcon{display:inline-block}
         }

    }
    .toggleIcon{

    }
</style>
