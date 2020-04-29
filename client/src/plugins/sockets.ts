import Vue from 'vue'
import io from 'socket.io-client'
import VueSocketIOExt from 'vue-socket.io-extended'

const BASE_URL = process.env.BASE_URL || 'http://localhost:4000/'
const socket = io(BASE_URL)

export default ({ store }) => {
  Vue.use(VueSocketIOExt, socket, { store })
}
