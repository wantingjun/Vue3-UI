<demo>
    支持 size
</demo>
<template>
    <div>
        <div>
            <Button size="big">big size</Button>
            <Button>normal size</Button>
            <Button size="small">small size</Button>
        </div>
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
