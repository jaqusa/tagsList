<template>
  <section v-if="tags.length" class="list">
    <div v-for="(tag, index) of tags" :key="index" class="items">
      <div>
        <Item :tag="tag" />
      </div>
      <div class="rigth">
        <button @click="edit(index)">Editar</button>
        <button @click="remove(index)">Borrar</button>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue, namespace } from 'nuxt-property-decorator'
import Item from './LitsItem.vue'
import { ITag } from '../../models'

const tag = namespace('tag')

@Component({
  components: {
    Item
  }
})
export default class List extends Vue {
  @tag.State
  tags!: Array<ITag>

  @Prop() edit!: Function
  @Prop() remove!: Function
}
</script>
<style scoped>
.list {
  margin: 20px;
}
.items {
  display: flex;
  justify-content: space-between;
  padding: 12px 10px;
}
.items:hover {
  background-color: #f0f1f7;
}
button {
  border: none;
  padding: 0;
  background: none;
  color: #adabab;
  margin-left: 10px;
}
.button:hover {
  background-color: #f6f4f4;
}
button:active {
  position: relative;
  top: 1px;
}
button:focus {
  outline: 0;
}
</style>
