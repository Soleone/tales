<template>
  <div class="welcome">
    <h1>{{ title }}</h1>

    <div class="form">
      <label>Please enter your name:</label>
      <input ref="name" @keyup.enter="start" v-model="name" />
    </div>

    <router-link to="/scene/start">Start</router-link>
  </div>
</template>

<script>
import { SET_NAME } from "@/store/constants.js"

export default {
  name: "Welcome",
  props: {
    title: String
  },
  data() {
    return {}
  },
  mounted() {
    this.focusInput()
  },
  computed: {
    name: {
      get() {
        return this.$store.state.player.name
      },
      set(name) {
        if (name && name[0] === name[0].toLowerCase()) {
          name = name[0].toUpperCase() + name.substring(1)
        }
        this.$store.dispatch(SET_NAME, name)
      }
    }
  },
  methods: {
    focusInput() {
      this.$refs.name.focus()
    },
    start() {
      this.$router.push({ name: "scene", params: { id: "start" } })
    }
  }
}
</script>

<style scoped lang="scss">
.welcome {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

label {
  margin-right: 4px;
}

button {
  margin-left: 0px;
}

.form {
  margin-bottom: 12px;
}
</style>
