<template>
  <div class="scene">
    <h1>{{ title }}</h1>


  </div>
</template>

<script>
export default {
  name: "Scene",
  props: {
    title: String
  },
  data() {
    return {
      playerName: this.$store.state.player.name;
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.scene {
}
h3 {
  margin: 40px 0 0;
}
</style>
