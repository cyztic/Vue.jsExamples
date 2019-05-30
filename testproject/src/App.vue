<template>
  <div id="app">
    <div class="container">
      <app-header :playerCount="playerList.length" :maxPlayers="maxPlayers"></app-header>
      <app-new-player @playerAdded="newPlayer"></app-new-player>
      <app-player-grid :playerList="playerList" @playerDeleted="deletePlayer"></app-player-grid>
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="alert alert-info">Info: Click on a class to delete it!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PlayerGrid from "./components/PlayerGrid.vue";
import NewPlayer from "./components/NewPlayer.vue";

export default {
  name: "app",
  data() {
    return {
      playerList: [],
      maxPlayers: 10
    };
  },
  methods: {
    newPlayer(player) {
      if (this.playerList.length >= this.maxPlayers) {
        return alert("Please delete a quote before adding another one");
      } else {
        this.playerList.push(player);
      }
    },
    deletePlayer(index) {
      this.playerList.splice(index, 1);
    }
  },
  components: {
    appHeader: Header,
    appPlayerGrid: PlayerGrid,
    appNewPlayer: NewPlayer
  }
};
</script>

<style lang="scss">

</style>
