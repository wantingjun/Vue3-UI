<template>
    <Switch v-model:value="bool" ></Switch>

</template>

<script lang="ts">
    import Switch from '../lib/switch.vue'
    import {ref} from 'vue'
    export default {
        name: "SwitchDemo",
        components:{Switch},
        setup(){
            const bool = ref(true)
            return {bool}
        }
    }
</script>

<style scoped>

</style>
