<template>
  <section class="elements">
    <Input @addTag="add" />
    <List :edit="edit" :remove="remove" />
  </section>
</template>
<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import Input from './Input/Input.vue'
import List from './List/List.vue'
import { ITag } from '../models'

const tag = namespace('tag')

@Component({
  components: {
    Input,
    List
  }
})
export default class TagsList extends Vue {
  @tag.Mutation
  addTag!: (tag: ITag) => void

  @tag.Mutation
  editTag!: (tag: ITag) => void

  randomColor(): String {
    return '#' + Math.floor(Math.random() * 16777215 + 1).toString(16)
  }

  //TODO organize calls to functions and server
  beforeMount() {
    Vue.prototype.$socket.client.on('removeTag', (data: number) => {
      console.log(data)
      this.remove(data)
    })
    Vue.prototype.$socket.client.on('addTag', (data: ITag) => {
      if (data.index < 0) {
        data.color = this.randomColor()
        this.addTag(data)
      } else this.editTag(data)
    })
    Vue.prototype.$socket.client.on('editTag', (data: ITag) => {
      this.add(data)
    })
  }

  add(newTag: ITag): void {
    if (newTag.text) {
      Vue.prototype.$socket.client.emit('addTag', newTag)
    }
  }

  @tag.Mutation
  tagToEdit!: (tag: number) => void

  edit(index: number): void {
    this.tagToEdit(index)
  }

  @tag.Mutation
  removeTag!: (tag: number) => void

  remove(index: number): void {
    console.log('re')
    Vue.prototype.$socket.client.emit('removeTag', index)
  }
}
</script>
<style scoped>
.elements {
  padding: 50px;
}
</style>
