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

  add(newTag: ITag): void {
    if (newTag.text) {
      if (newTag.index === 0) {
        newTag.color = this.randomColor()
        this.addTag(newTag)
      } else this.editTag(newTag)
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
    this.removeTag(index)
  }
}
</script>
<style scoped>
.elements {
  padding: 50px;
}
</style>
