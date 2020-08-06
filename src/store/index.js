import { createStore } from "vuex"

export default createStore({
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
    currentResult: null,
    scenes: {
      start: {
        title: "In your bed",
        moments: {
          knock: {
            description: "You hear a loud knock on the door.",
            actions: {
              time: {
                description: "Look at the time",
                result: "It's 11:55am in the morning."
              },
              wait: {
                description: "Wait until it stops",
                result: "You wait and hope it will just go away.",
                moment: "intensify",
              },
              up: {
                description: "Get up and take a look through the door spy.",
                result: "You see a man and a woman talking to each other.",
                moment: "door"
              }
            },
            items: {
              lighter: {
                result: "It lits up briefly but you decide to not waste any gas."
              },
              phone: {
                result: "You unlock it with your fingerprint.",
                moment: "phone"
              },
            }
          },
          door: {

          },
          phone: {
            description: "You look at your home screen which is way too packed with icons.",
            actions: {
              irrigation: {
                description: "Turn on front yard smart irrigation system.",
                result: "You hear yelling from more than one person.",
                moment: "intensify"
              },
              doorbell: {
                description: "Use the DoorSnoop app to look through your doorbell camera.",
                result: "You see a man and a woman talking to each other and few more people in the background on the street."
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
