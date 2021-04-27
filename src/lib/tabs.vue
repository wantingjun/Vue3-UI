<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{t}}</div>
        </div>
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index" />
        </div>
    </div>
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

<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
        }
        &-content {
            padding: 8px 0;
        }
    }
</style>
