<template>
  <input type="text" v-model="newTag.text" @keyup.enter="addTag" placeholder="Añadir etiqueta" />
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  namespace,
  Prop,
  Watch
} from 'nuxt-property-decorator'
import { ITag } from '../../models'

const tag = namespace('tag')

@Component
export default class Input extends Vue {
  newTag: ITag = {
    text: '',
    color: '',
    index: -1
  }

  @tag.State
  toEdit!: ITag

  @Watch('toEdit')
  changeNewTag(toEdit: ITag) {
    this.newTag.text = this.toEdit.index ? this.toEdit.text : ''
  }

  @Emit('addTag')
  addTag(): ITag {
    let tag!: ITag
    if (this.toEdit.index < 0) {
      tag = {
        text: this.newTag.text,
        color: '',
        index: 0
      }
    } else {
      tag = {
        text: this.newTag.text,
        color: this.toEdit.color,
        index: this.toEdit.index
      }
    }

    this.newTag.text = ''
    return tag
  }
}
</script>
<style scoped>
input {
  width: 92%;
  height: 50px;
  border: none;
  font-size: 20px;
  outline: none;
  caret-color: #233ed4;
}
input:hover {
  outline: none;
}
</style>
