<demo>
    常规使用
</demo>
<template>
    <div>
        <Button @click="toggle">点击打开对话框</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <strong>加粗的字体</strong>
                <div>正文</div>
            </template>
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts">
    import {Dialog} from "../lib/index.ts";
    import {Button} from "../lib/index.ts";
    import {
        ref
    } from 'vue'
    import {
        openDialog
    } from '../lib/openDialog'
    export default {
        components: {
            Dialog,
            Button
        },
        setup() {
            const x = ref(false)
            const toggle = () => {
                x.value = !x.value
            }
            const f1 = () => {
                return false
            }
            const f2 = () => {}
            return {
                x,
                toggle,
                f1,
                f2
            }
        }
    }
</script>
