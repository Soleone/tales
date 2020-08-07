import { createStore } from "vuex"
import Action from "@/models/action.js"
import * as scenes from "./modules/scenes.js"
import { mutations } from "./mutations.js"
import { actions } from "./actions.js"

export default createStore({
  modules: {
    scenes
  },
  mutations,
  actions,
  getters: {
    scene(state) {
      return state.scenes.scenes.find(scene => scene.id === state.sceneName)
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
    actionById: (state, getters) => id => {
      return getters.actions.find(action => action.id === id)
    }
  },
  state: {
    sceneName: null,
    momentName: null,
    result: null,
    player: {
      name: "",
      items: {
        lighter: "Lighter",
        phone: "Phone"
      }
    }
  }
})
