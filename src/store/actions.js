import * as Constants from "./constants.js"

export const actions = {
  [Constants.SET_NAME]({ commit }, name) {
    commit(Constants.SET_NAME, name)
  },
  [Constants.SET_SCENE]({ commit }, id) {
    commit(Constants.SET_SCENE, id)
  },
  [Constants.SET_MOMENT]({ commit }, moment) {
    commit(Constants.SET_MOMENT, moment)
  },
  [Constants.SET_RESULT]({ commit }, result) {
    commit(Constants.SET_RESULT, result)
  },
  [Constants.PICK_UP_ITEM]({ commit }, item) {
    commit(Constants.PICK_UP_ITEM, item)
  },
  [Constants.HANDLE_ITEM](_, item) {
    console.log("Using item " + item)
  }
}
