<template>
  <div class="welcome">
    <h1>{{ title }}</h1>

    <div class="form">
      <label>Please enter your name:</label>
      <input @enter.prevent v-model="name" />
    </div>

    <router-link to="/scene/start">Start</router-link>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    title: String
  },
  data() {
    return {}
  },
  computed: {
    name: {
      get() {
        return this.$store.state.player.name
      },
      set(name) {
        this.$store.commit("updateName", name)
      }
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
