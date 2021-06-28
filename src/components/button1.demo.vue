<demo>
    常规使用
</demo>
<template>
    <div>
        <Button>hello</Button>
        <Button theme="link">link button</Button>
        <Button theme="text">text buttom</Button>
    </div>
</template>

<script lang="ts">
    import {Button} from "../lib/index.ts";
    export default {
        components: {
            Button
        }
    }
</script>
