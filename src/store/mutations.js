import * as Constants from "./constants.js"

export const mutations = {
  [Constants.NEW_GAME](state) {
    state.player.items = state.data.items
  },
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
  [Constants.SET_ACTIONS](state, actions) {
    state.actions = actions
  },
  [Constants.MARK_ACTION_AS_DONE](state, actionId) {
    const action = state.actions.find(action => action.id === actionId)
    if (action) {
      action.done = true
    }
  },
  [Constants.PICK_UP_ITEM](state, item) {
    state.items.push(item)
  }
}
