<demo>
    支持disabled
</demo>
<template>
    <Switch v-model:value="bool"  disabled></Switch>
</template>

<script  lang="ts">
    import {Switch} from "../lib/index.ts";
    import {
        ref
    } from 'vue'
    export default {
        name: "switch2.demo",
        components: {
            Switch
        },
        setup() {
            const bool = ref(false)
            return {
                bool
            }
        }
    }
</script>

<style scoped>

</style>
