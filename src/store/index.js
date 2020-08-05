import { createStore } from "vuex"

export default createStore({
  state: {
    player: {
      name: "",
      items: {
        lighter: "Lighter"
      }
    },
    currentScene: null,
    currentMoment: null,
    currentResult: null,
    scenes: {
      start: {
        title: "In your bed",
        moments: {
          introduction: {
            description: "You hear a loud knock on the door.",
            actions: {
              time: {
                description: "Look at the time",
                result: "It's 1:30pm in the morning."
              },
              wait: {
                description: "Wait until it stops",
                result: "You wait and hope it will just go away."
              }
            },
            items: {
              lighter: {
                result: "It lits up briefly but you decide to not waste any gas."
              }
            }
          },
          intensify: {
            description: "After a few seconds the knocking becomes even louder.",
            actions: {}
          }
        }
      }
    }
  },
  mutations: {
    updateName(state, name) {
      state.player.name = name
    },
    setScene(state, id) {
      state.currentScene = id
    },
    setMoment(state, moment) {
      state.currentMoment = moment
    },
    setResult(state, result) {
      state.currentResult = result
    },
    pickupItem(state, item) {
      state.items.push(item)
    },
    handleItem(state, item) {
      console.log("Using item " + item)
    }
  },
  actions: {},
  modules: {}
})
