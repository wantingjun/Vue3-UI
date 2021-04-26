<template>
    <div style="border:1px solid red" :size="size">
    <button v-bind="rest">
        <slot></slot>
    </button>
    </div>
</template>

<script lang="ts">
    export default {
        name: "button",
        inheritAttrs:false ,//1. 不让div继承：继承属性，div就不在拥有外面importbutton绑定的继承事件了
        setup(props, context){
            const {size,...rest} =context.attrs //rest是除了size其他的
            return {size,rest}

        }
    }
</script>

<style scoped>

</style>