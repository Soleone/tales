<template>
  <div class="welcome">
    <h1>{{ title }}</h1>

    <form>
      <label>What is your name?</label>
      <input v-model="name" />
      <button @click.prevent="setName">Enter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    title: String
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    setName() {
      this.$store.state.player.name = this.name;
    }
  }
};
</script>

<style scoped lang="scss">
.welcome {
}
h3 {
  margin: 40px 0 0;
}
form {
}
label {
  margin-right: 4px;
}
button {
  margin-left: 0px;
}
</style>
