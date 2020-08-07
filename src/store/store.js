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
      return state.scenes.scenes[state.currentScene]
    },
    moment(state, getters) {
      return getters.scene.moments[state.currentMoment]
    },
    options(state, getters) {
      return getters.moment.options
    },
    actions(state, getters) {
      return getters.options.map(option => new Action(option))
    },
    actionById: (state, getters) => id => {
      console.log(id)
      return getters.actions.find(action => action.id === id)
    }
  },
  state: {
    player: {
      name: "",
      items: {
        lighter: "Lighter",
        phone: "Phone"
      }
    },
    currentScene: null,
    currentMoment: null,
    currentResult: null
  }
})
