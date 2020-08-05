<template>
  <div class="player">
    <a href="" @click.prevent="toggleDetails" title="Toggle details">{{ name }}</a>

    <div class="details" v-show="showingDetails">
      <p>Inventory</p>
      <ul class="inventory">
        <li v-for="(item, id) in items" :key="id">
          <a href="#" @click.prevent="useItem(id)">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Player",
  data() {
    return {
      showingDetails: false
    }
  },
  computed: {
    ...mapState({
      items: state => state.player.items,
      name: state => state.player.name
    })
  },
  methods: {
    toggleDetails() {
      this.showingDetails = !this.showingDetails
    },
    useItem(id) {
      this.$store.commit("handleItem", id)
    }
  }
}
</script>

<style scoped lang="scss">
.player {
  position: fixed;
  top: 100px;
  right: -200px;
  width: 400px;
  margin-left: auto;
  background-color: #f9f9f9;
  padding: 8px;
}
</style>
