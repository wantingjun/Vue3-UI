<template>
    <div>Button示例</div>
    <h1> 示例1</h1>
    <div>
        <Button >你好</Button>
        <Button theme="button">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
    <h1> 示例2</h1>
    <div>
        <Button >normal</Button>
        <Button size="big">dadada</Button>
        <Button size="small">small</Button>
    </div>

</template>

<script lang="ts">
    import Button from '../lib/button.vue'
    export default {
        name: "ButtonDemo",
        components:{Button},
        setup(){
            const onClick = ()=>{
                console.log('hi')
            }
            return {onClick}
        }
    }
</script>

<style scoped>

</style>
