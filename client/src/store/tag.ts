import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ITag } from '../models'
import Vue from 'vue'

@Module({
  name: 'tag',
  stateFactory: true,
  namespaced: true
})
export default class Tag extends VuexModule {
  tags: Array<ITag> = []
  toEdit: ITag = {
    text: '',
    color: '',
    index: -1
  }

  @Mutation
  addTag(newTag: ITag): void {
    this.tags.unshift(newTag)
  }

  @Mutation
  editTag(tag: ITag): void {
    this.tags.splice(tag.index, 1, tag)
    this.toEdit = {
      text: '',
      color: '',
      index: -1
    }
    Vue.prototype.$socket.client.emit('editTag', tag)
  }

  @Mutation
  tagToEdit(index: number): void {
    this.toEdit = {
      text: this.tags[index].text,
      color: this.tags[index].color,
      index
    }
  }

  @Mutation
  removeTag(index: number): void {
    this.tags.splice(index, 1)
  }
}
