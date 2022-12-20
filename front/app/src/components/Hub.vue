<script lang="ts">
import IGameConfig from '../models/IGameConfig'

export default {
  data() {
    return {
      showOriginal: true
    }
  },
  computed: {
    gameConfig: {
      get() {
        return this.$store.getters.getGameConfig
      },
      set(val: IGameConfig) {
        this.$store.commit('setGameConfig', val)
      }
  },
  },
  methods: {
    originalModeToggle() {
      this.showOriginal = true
      this.gameConfig.mode = 'original'
    },
    powerUpsModeToggle() {
      this.showOriginal = false
      this.gameConfig.mode = 'powerUps'
    }
  },
  mounted() {
    this.gameConfig.mode = 'original'
  }
}
</script>
  
<template>
  <div>
    <button id="startGameButton" @click="$router.push('game')">START</button>
  </div>
  <div>
    <h1>Choose game mode:</h1>
    <button id="originalModeButton" @click="originalModeToggle" :class="[showOriginal ? 'active' : '']">Original Pong</button>
    <button id="powerUpsModeButton" @click="powerUpsModeToggle" :class="[showOriginal ? '' : 'active']">Poké Pong</button>
  </div>
</template>
  
<style scoped>
h1 {
  font-family: "pokemon";
  font-size: 70px;
  color: rgb(255, 200, 0);
  text-shadow: 1px 1px 2px rgb(25, 0, 255), 0 0 1em rgb(0, 0, 0), 0 0 0.2em rgb(2, 175, 255);
}

#startGameButton {
  border: none;
  background-color: transparent;
  overflow: hidden;
  background-image: url('/src/assets/masterball_button.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 140px;
  width: 140px;
  font-family: "pokemon";
  font-size: 25px;
  color: rgb(255, 200, 0);
  text-shadow: 1px 1px 2px rgb(25, 0, 255), 0 0 1em rgb(0, 0, 0), 0 0 0.2em rgb(2, 175, 255);
}
</style>