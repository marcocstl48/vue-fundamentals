<template>
<div>
    <span v-if="open" @click="open=!open">Collapse</span>
    <span v-if="!open" @click="open=!open">Expand</span>

    <slot v-if="open"></slot>
</div>
</template>

<script>
export default {
    name:'CollapsibleSection',
    data() {
        return { open: true };
  }
}
</script>

<style scoped>
.header {
    background-color: gray;
    padding:3px;
    cursor: pointer
;}
</style>