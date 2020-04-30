import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'

export default ({ store }) => {
  const BASE_URL = process.env.BASE_URL || 'http://localhost:4000/'
  const socket = io(BASE_URL)
  Vue.use(VueSocketIOExt, socket, { store })
}
