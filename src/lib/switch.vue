<template>
    <button :class="{checked:value}" @click="toggle"><span></span></button>
    <div>{{value}}</div>
</template>

<script lang="ts">
    import {ref} from 'vue'
    export default {
        name: "switch",
        setup(props, context){
            // const  checked = ref(false)
            //点击可以切换
            const toggle=()=>{
                context.emit('update:value',!props.value) //把当前props.value的值取反，通过input事件发给外面
              //   checked.value = !checked.value
            }
            return {toggle}
        },
        props:{
            value:Boolean
        }
    }
</script>

<style lang="scss" scoped>
    $h: 22px;
    $h2: $h - 4px;
    button{
        height: $h;
        width: $h*2;
        border: none;
        background: grey;
        border-radius: $h/2;
        position: relative;
    }
    span{
        position: absolute;
        top: 2px;
        left:2px;
        height: $h2;
        width: $h2;
        background:white;
        border-radius: $h2 / 2;
        transition: left 250ms;
    }
    button.checked{
        background: blue;
    }
    button.checked > span{
        left: calc(100% - #{$h2} - 2px);
    }
    //去掉外围黑色的框框
    button:focus{
        outline:none;
    }

</style>
