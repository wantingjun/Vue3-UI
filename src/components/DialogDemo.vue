<template>
    <div>dialog实例</div>
    <h1>1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2"></Dialog>

</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'
    export default {
        name: "DialogDemo",
        components:{Dialog,Button},
        setup(){
            const x =ref(false)
            const toggle = ()=>{
                console.log(x)
                x.value =!x.value
            }
            const f1=()=>{
                return true
            }
            const f2=()=>{
            }
            return {x,toggle,f1,f2}
        }
    }
</script>

<style scoped>

</style>
