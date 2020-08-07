<template>
  <span class="player">
    <a href="" @click.prevent="toggleDetails" title="Toggle details">Inventory</a>

    <div class="details" v-show="showingDetails">
      <ul class="inventory">
        <li v-for="(item, id) in items" :key="id">
          <a href="#" @click.prevent="useItem(id)">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </span>
</template>

<script>
import { mapState } from "vuex"
import { HANDLE_ITEM } from "@/store/constants.js"

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
      this.$store.dispatch(HANDLE_ITEM, id)
    }
  }
}
</script>

<style scoped lang="scss">
.player {
  //width: 200px;
  //margin-left: auto;
  //text-align: left;
  //background-color: #f9f9f9;
  //padding: 8px;
}
</style>
