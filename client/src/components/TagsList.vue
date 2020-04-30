<template>
  <section class="elements">
    <Input @addTag="idAddOrEdit" />
    <List :edit="findTagToEdit" :remove="remove" />
  </section>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import Input from './Input/Input.vue'
import List from './List/List.vue'
import { ITag, socketEvents } from '../models'

const tag = namespace('tag')

@Component({
  components: {
    Input,
    List
  }
})
export default class TagsList extends Vue {
  connected!: Vue

  beforeMount() {
    this.connected = Vue.prototype.$socket.client.connected
    if (this.connected) {
      Vue.prototype.$socket.client.on(socketEvents.addTag, (data: ITag) => {
        this.add(data)
      })

      Vue.prototype.$socket.client.on(socketEvents.editTag, (data: ITag) => {
        this.edit(data)
      })

      Vue.prototype.$socket.client.on(
        socketEvents.removeTag,
        (data: number) => {
          this.removeTag(data)
        }
      )
    }
  }

  //Mutations
  @tag.Mutation
  addTag!: (tag: ITag) => void

  @tag.Mutation
  editTag!: (tag: ITag) => void

  @tag.Mutation
  tagToEdit!: (tag: number) => void

  @tag.Mutation
  removeTag!: (tag: number) => void

  //Methods
  idAddOrEdit(newTag: ITag): void {
    if (newTag.text) {
      if (newTag.index < 0) {
        newTag.color = this.randomColor()
        this.connected
          ? Vue.prototype.$socket.client.emit(socketEvents.addTag, newTag)
          : this.add(newTag)
      } else
        this.connected
          ? Vue.prototype.$socket.client.emit(socketEvents.editTag, newTag)
          : this.edit(newTag)
    }
  }

  add(newTag: ITag): void {
    this.addTag(newTag)
  }

  edit(index: ITag): void {
    this.editTag(index)
  }

  findTagToEdit(index: number): void {
    this.tagToEdit(index)
  }

  remove(index: number): void {
    this.connected
      ? Vue.prototype.$socket.client.emit(socketEvents.removeTag, index)
      : this.removeTag(index)
  }

  //Helper Methods
  randomColor(): String {
    return '#' + Math.floor(Math.random() * 16777215 + 1).toString(16)
  }
}
</script>

<style scoped>
.elements {
  padding: 50px;
}
</style>
