import { mount } from '@vue/test-utils'
import TagList from '@/src/components/TagsList.vue'

describe('TagList', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(TagList)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
