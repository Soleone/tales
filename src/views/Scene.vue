<template>
  <Player />

  <div class="scene">
    <h1 :title="id">{{ title }}</h1>
    <p :title="currentMoment">{{ moment.description }}</p>

    <div class="actions">
      <p>You can:</p>
      <ul>
        <li v-for="(action, id) in actions" :key="id">
          <a href="#" :title="id" @click.prevent="handleAction(id)">
            {{ action.description }}
          </a>
        </li>
      </ul>
    </div>

    <div class="result" v-show="currentResult">
      {{ currentResult }}
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player.vue"
import { mapState } from "vuex"

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
    this.$store.commit("setScene", this.id)
    const startingMoment = Object.keys(this.scene.moments)[0]
    this.$store.commit("setMoment", startingMoment)
  },
  computed: {
    ...mapState(["currentScene", "currentMoment", "currentResult"]),
    scene() {
      return this.$store.state.scenes[this.currentScene]
    },
    title() {
      return this.scene.title
    },
    moment() {
      return this.scene.moments[this.currentMoment]
    },
    actions() {
      return this.moment.actions
    }
  },
  methods: {
    handleAction(id) {
      console.log("Action: " + id)
      const action = this.actions[id]
      if (action.result) {
        this.$store.commit("setResult", action.result)
      }
      if (action.moment) {
        this.$store.commit("setMoment", action.moment)
        setTimeout(() => this.$store.commit("setResult", null), 3000)
      }
      console.log(this.currentResult)
    }
  }
}
</script>

<style scoped lang="scss">
.scene {
  width: 800px;
  margin: 0 auto;
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
ul {
}
li {
  text-align: left;
}
</style>
