<template>
<div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
</div>
</template>

<script>
import GetPartsMixin from './get-parts-mixin';

export default {
    name: 'PartInfo',
    mixins: [GetPartsMixin],
    props: ['partType','id'],
    computed: {
        part(){
            const { partType, id} = this;
            return this.parts[partType].find(part => part.id == +id);

        }
    }
  }
</script>