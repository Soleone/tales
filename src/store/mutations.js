import * as Constants from "./constants.js"

export const mutations = {
  [Constants.SET_NAME](state, name) {
    state.player.name = name
  },
  [Constants.SET_SCENE](state, id) {
    state.currentScene = id
    state.currentresult = null
  },
  [Constants.SET_MOMENT](state, moment) {
    state.currentMoment = moment
  },
  [Constants.SET_RESULT](state, result) {
    state.currentResult = result
  },
  [Constants.PICK_UP_ITEM](state, item) {
    state.items.push(item)
  },
  [Constants.HANDLE_ITEM](state, item) {
    console.log("Using item " + item)
  },
  [Constants.HANDLE_ACTION]() {
    // TODO
  }
}
