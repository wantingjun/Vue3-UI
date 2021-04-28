<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div class="gulu-tabs-nav-item" v-for="(t,index) in titles"
                 :ref="el=>{if(el) navItems[index]=el}"
                 @click="select(t)"
                 :class="{selected: t=== selected}" :key="index">{{t}}</div>
            <div class="gulu-tabs-nav-indicator"
                 ref="indicator" ></div>
        </div>
        <div class="gulu-tabs-content">
            <component class="gulu-tabs-content-item" :class="{selected: c.props.title === selected }" v-for="c in defaults" :is="c" />
        </div>
    </div>
</template>
<script lang="ts">
    import tab from './tab.vue'
    import {ref,onMounted} from 'vue'
    export default {
        name: "tabs",
        props:{
            selected:{
                type:String
            }
        },

        setup(props,context){
            const navItems = ref<HTMLDivElement[]>([])
            const indicator = ref<HTMLDivElement>(null)
            onMounted(()=>{ //挂载后显示
                console.log({...navItems.value})
                const divs = navItems.value
                const result = divs.filter(div=>div.classList.contains('selected'))[0] //filter返回数组，所以获取[0]
                console.log(result)
                const {width} = result.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
            })
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
            const current = defaults.filter((tag)=>{ //current是当前选中的内容的title
                return tag.props.title === props.selected
            })[0]
            const select = (title)=>{
                context.emit('update:selected',title)
            }
            return {defaults,titles,current,select,navItems,indicator}
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
            position: relative;
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
            &-indicator {
                position: absolute;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
                width: 100px;
            }
        }
        &-content {
            padding: 8px 0;

            &-item{
                display:none;
                &.selected {
                    display: block;
                }
            }
        }
    }
</style>
