import * as Constants from "./constants.js"

export const mutations = {
  [Constants.SET_NAME](state, name) {
    state.player.name = name
  },
  [Constants.SET_SCENE](state, id) {
    state.sceneName = id
    state.result = null
  },
  [Constants.SET_MOMENT](state, moment) {
    state.momentName = moment
  },
  [Constants.SET_RESULT](state, result) {
    state.result = result
  },
  [Constants.PICK_UP_ITEM](state, item) {
    state.items.push(item)
  },
  [Constants.HANDLE_ITEM](state, item) {
    console.log("Using item " + item)
  }
}
