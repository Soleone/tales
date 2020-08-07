<template>
  <div class="scene">
    <div class="vignette">
      <h1 :title="id">{{ scene.title }}</h1>
      <p :title="currentMoment">{{ moment.description }}</p>
    </div>

    <div class="actions">
      <p v-show="actions.length">You can:</p>
      <ul>
        <li v-for="action in actions" :key="action.id">
          <a href="#" :title="action.id" @click.prevent="handleAction(action.id)">
            {{ action.description }}
          </a>
        </li>
        <li>
          <Player />
        </li>
      </ul>
    </div>

    <div class="result" v-show="currentResult">
      {{ currentResult }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
import * as Constants from "@/store/constants"
import Player from "@/components/Player.vue"

export default {
  name: "Scene",
  components: {
    Player
  },
  props: {
    id: String
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch(Constants.SET_SCENE, this.id)
    const startingMoment = Object.keys(this.$store.getters.scene.moments)[0]
    this.$store.dispatch(Constants.SET_MOMENT, startingMoment)
  },
  computed: {
    ...mapState(["currentScene", "currentMoment", "currentResult"]),
    ...mapGetters(["scene", "moment", "options", "actions"])
  },
  methods: {
    handleAction(id) {
      const action = this.$store.getters.actionById(id)
      console.log(action)
      if (action.result) {
        this.$store.dispatch(Constants.SET_RESULT, action.result)
      }

      if (action.moment) {
        this.$store.dispatch(Constants.SET_MOMENT, action.moment)
        setTimeout(() => {
          this.$store.dispatch(Constants.SET_RESULT, null)
        }, 3000)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.scene {
  width: 800px;
  margin: 0 auto;
}

.vignette {
  padding: 16px;
  background-color: #f9f9f9;
}

.result {
  background-color: #f9f9f9;
  padding: 8px;
}

h3 {
  margin: 40px 0 0;
}

.actions {
  text-align: left;
}

.actions .done {
  text-decoration: line-through;
}

ul {
}
li {
  text-align: left;
}
</style>
