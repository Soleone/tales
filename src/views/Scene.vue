<template>
  <div class="scene">
    <div class="vignette">
      <h1 :title="id">{{ scene.title }}</h1>
      <p v-if="moment" :title="momentName">{{ moment.description }}</p>
    </div>

    <div class="actions">
      <p v-show="actions.length">You can:</p>
      <ul>
        <li v-for="action in actions" :key="action.id">
          <a
            href="#"
            :title="action.id"
            @click.prevent="HANDLE_ACTION(action.id)"
          >
            {{ action.description }}
          </a>
        </li>
        <li>
          <Player />
        </li>
      </ul>
    </div>

    <div class="result" v-show="result">
      {{ result }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
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
    const startingMoment = this.$store.getters.scene.moments[0]
    this.$store.dispatch(Constants.SET_MOMENT, startingMoment.id)
  },
  computed: {
    ...mapState(["sceneName", "momentName", "result"]),
    ...mapGetters(["scene", "moment", "options", "actions"])
  },
  methods: {
    ...mapActions([Constants.HANDLE_ACTION])
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
