<template>
    <Switch v-model:value="y" ></Switch>

</template>

<script lang="ts">
    import Switch from '../lib/switch.vue'
    import {ref} from 'vue'
    export default {
        name: "SwitchDemo",
        components:{Switch},
        setup(){
            const y = ref(true)
            return {y}
        }
    }
</script>

<style scoped>

</style>
