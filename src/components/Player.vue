<template>
  <span class="player">
    <a href="" @click.prevent="toggleDetails" title="Toggle details">
      Inventory
    </a>

    <div class="details" v-show="showingDetails">
      <ul class="inventory">
        <li v-for="item in items" :key="item.id">
          <a href="#" @click.prevent="HANDLE_ITEM(item.id)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </span>
</template>

<script>
import { mapState, mapActions } from "vuex"
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
    ...mapActions([HANDLE_ITEM]),
    toggleDetails() {
      this.showingDetails = !this.showingDetails
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
