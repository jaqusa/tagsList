<template>
  <section>
    <span class="dot" :style="{ backgroundColor: tag.color }"></span>
    <span class="content">{{ tag.text }}</span>
  </section>
</template>
<script lang="ts">
import { ITag } from '../../models/ITag'

export default {
  name: 'Item',
  props: {
    tag: Object as () => ITag
  }
}
</script>
<style scoped>
.dot {
  height: 5px;
  width: 5px;
  border-radius: 50%;
  display: inline-block;
  margin: 3px 10px;
  background-color: black;
}
.content {
  font-weight: 400;
}
</style>
