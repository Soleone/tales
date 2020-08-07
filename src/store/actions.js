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
  [Constants.TRANSITION_MOMENT]({ dispatch }, moment) {
    dispatch(Constants.SET_MOMENT, moment)
    setTimeout(() => {
      dispatch(Constants.SET_RESULT, null)
    }, 3000)
  },
  [Constants.SET_RESULT]({ commit }, result) {
    commit(Constants.SET_RESULT, result)
  },
  [Constants.PICK_UP_ITEM]({ commit }, item) {
    commit(Constants.PICK_UP_ITEM, item)
  },
  [Constants.HANDLE_ACTION]({ dispatch, getters }, actionId) {
    const action = getters.actionById(actionId)

    if (action.result) {
      dispatch(Constants.SET_RESULT, action.result)
    }

    if (action.moment) {
      dispatch(Constants.TRANSITION_MOMENT, action.moment)
    }
  },
  [Constants.HANDLE_ITEM]({ dispatch, getters }, itemId) {
    if (!getters.moment.items) {
      return
    }
    const momentItem = getters.moment.items.find(item => item.id === itemId)

    if (momentItem) {
      if (momentItem.result) {
        dispatch(Constants.SET_RESULT, momentItem.result)
      }

      if (momentItem.moment) {
        dispatch(Constants.TRANSITION_MOMENT, momentItem.moment)
      }
    } else {
      console.log("TODO: Display item default message")
    }
  }
}
