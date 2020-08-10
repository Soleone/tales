import * as Constants from './constants.js'

export const actions = {
  [Constants.NEW_GAME]({ commit }) {
    commit(Constants.NEW_GAME)
  },
  [Constants.SET_NAME]({ commit }, name) {
    commit(Constants.SET_NAME, name)
  },
  [Constants.SET_SCENE]({ commit }, id) {
    commit(Constants.SET_SCENE, id)
  },
  [Constants.SET_MOMENT]({ commit, getters }, moment) {
    commit(Constants.SET_MOMENT, moment)
    commit(Constants.SET_ACTIONS, getters.actions)
  },
  [Constants.TRANSITION_MOMENT]({ dispatch }, moment) {
    dispatch(Constants.SET_MOMENT, moment)
    setTimeout(() => {
      // BUG: If the next result after this is displayed too quickly
      // because the user is a fast clicker then it wipes the new message
      dispatch(Constants.SET_RESULT, null)
    }, 3000)
  },
  [Constants.SET_RESULT]({ commit }, result) {
    commit(Constants.SET_RESULT, result)
  },
  [Constants.MARK_ACTION_AS_DONE]({ commit }, actionId) {
    commit(Constants.MARK_ACTION_AS_DONE, actionId)
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

    dispatch(Constants.MARK_ACTION_AS_DONE, action.id)
  },
  [Constants.HANDLE_ITEM]({ state, dispatch, getters }, itemId) {
    const item = getters.itemById(itemId)

    if (!item) {
      return
    }

    const options = getters.filterByContext(item.options, {
      moment: getters.moment
    })
    const option = options[0]
    if (option) {
      if (option.result) {
        dispatch(Constants.SET_RESULT, option.result)
      }

      if (option.moment) {
        dispatch(Constants.TRANSITION_MOMENT, option.moment)
      }
    } else {
      const messages = item.usageMessages
      const message = messages[Math.floor(Math.random() * messages.length)]

      dispatch(Constants.SET_RESULT, message)
    }
  }
}
