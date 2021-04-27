<template>
    <div>dialog实例</div>
    <h1>1</h1>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="x" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <div>hi</div>
        </template>
        <template v-slot:title>
            <strong>加醋的title</strong>
        </template>

    </Dialog>
    <h1>实例2</h1>
    <Button @click="showDialog">showDialog</Button>
</template>

<script lang="ts">
    import Dialog from '../lib/Dialog.vue'
    import Button from '../lib/Button.vue'
    import {ref} from 'vue'
    import {openDialog} from '../lib/openDialog.ts'
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
            const showDialog=()=>{
                openDialog({
                    title:'标题',
                    content:'HELLO',
                    ok(){
                        console.log('ok')
                    },
                    cancel(){
                        console.log('cancel')
                    }
                })
            }
            return {x,toggle,f1,f2,showDialog}
        }
    }
</script>

<style scoped>

</style>
