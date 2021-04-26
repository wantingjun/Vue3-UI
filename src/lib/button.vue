<template>
    <button calss="gulu-button" :class="`theme-${theme}`">
        <slot></slot>
    </button>

</template>

<script lang="ts">
    export default {
        name: "button",
        props:{
            theme:{
                type:String,
                default:'button'
            }
        }
    }
</script>

<style scoped>

</style>