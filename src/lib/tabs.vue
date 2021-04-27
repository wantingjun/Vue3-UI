<template>
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults" :is="c" :key="index"></component>
</template>

<script lang="ts">
    import tab from './tab.vue'
    export default {
        name: "tabs",

        setup(props,context){
            //console.log({...context.slots.default()[0] })
            //console.log({...context.slots.default()[1] })
            const defaults = context.slots.default()
          //  console.log(defaults[0].type === tab) //检查组件类型
            defaults.forEach((tag)=>{
                if(tag.type !== tab){ //如果自组件的类型不是tab，则报错
                    throw new Error('tabs必须是tab') //如果这里报错，下面不会执行
                }
            })
            const titles = defaults.map((tag)=>{
                    return tag.props.title //拿到tab的title属性
            })
            return {defaults,titles}
        }

    }
</script>

<style scoped>

</style>
