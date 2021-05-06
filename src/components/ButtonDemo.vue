<template>
    <div>
        <h1>Button 示例</h1>
        <Demo :component="Button1Demo" />
        <Demo :component="Button2Demo" />
        <Demo :component="Button3Demo" />
        <Demo :component="Button4Demo" />
        <Demo :component="Button5Demo" />
    </div>

</template>

<script lang="ts">
    import Button from '../lib/button.vue'
    import Demo from "./demo.vue";
    import Button1Demo from "./button1.demo.vue";
    import Button2Demo from "./button2.demo.vue";
    import Button3Demo from "./button3.demo.vue";
    import Button4Demo from "./button4.demo.vue";
    import Button5Demo from "./button5.demo.vue";
    export default {
        name: "ButtonDemo",
        components:{Button, Demo},
        setup(){
            return {
                Button1Demo,
                Button2Demo,
                Button3Demo,
                Button4Demo,
                Button5Demo
            };
        }
    }
</script>

<style scoped>

</style>
