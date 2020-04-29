import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { ITag } from '../models'

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

  get Tags(): Array<ITag> {
    return this.tags
  }

  @Mutation
  addTag(newTag: ITag): void {
    this.tags.unshift(newTag)
  }

  @Mutation
  editTag(tag: ITag): void {
    this.tags[tag.index] = tag
    this.toEdit = {
      text: '',
      color: '',
      index: -1
    }
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
