import { createStore } from "vuex"
import Action from "@/models/action.js"
import * as data from "./modules/data.js"
import { mutations } from "./mutations.js"
import { actions } from "./actions.js"

export default createStore({
  modules: {
    data
  },
  mutations,
  actions,
  getters: {
    scene(state) {
      return state.data.scenes.find(scene => scene.id === state.sceneName)
    },
    moment(state, getters) {
      return getters.scene.moments.find(moment => {
        return moment.id === state.momentName
      })
    },
    options(state, getters) {
      return getters.moment.options
    },
    actions(state, getters) {
      return getters.options.map(option => new Action(option))
    },
    actionById: (state, getters) => actionId => {
      return getters.actions.find(action => action.id === actionId)
    },
    itemById: state => itemId => {
      return state.data.items.find(item => item.id === itemId)
    }
  },
  state: {
    sceneName: null,
    momentName: null,
    actions: [],
    log: {
      actions: [],
      results: [],
      scenes: [],
      moments: []
    },
    result: null,
    player: {
      name: "",
      items: []
    }
  }
})
