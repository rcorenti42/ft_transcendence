<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  el: '#app'
})
</script>

<template>
  <div>
    <router-link to="/">
      <img id="logo" alt="logo" src="/src/assets/pokepong_logo.png">
    </router-link>
  </div>
  <div>
    <router-link to="/">
      <img id="optionsButton" alt="option_button" src="/src/assets/optionsButton.png">
    </router-link>
  </div>
  <router-view />
</template>

<style>
body {
  background-image: url("/src/assets/pokemons_background.png"), radial-gradient(pink, blue);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position:center;
}

button {
  border: none;
  background-color: transparent;
  overflow: hidden;
  background-image: url('/src/assets/pokeball_button.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 30vh;
  height: 30vh;
  max-width: 200px;
  max-height: 200px;
  font-family: "pokemon";
  color: rgb(255, 200, 0);
  text-shadow: 2px 2px 4px rgb(0, 4, 255), 0 0 1em rgb(0, 0, 0), 0 0 0.2em rgb(2, 175, 255);
}

@media screen and (min-height: 581px) {
  button {
    font-size: 40px;
  }
}

@media screen and (max-height: 580px) and (min-height: 301px) {
  button {
    font-size: 20px;
  }
}

@media screen and (max-height: 300px) {
  button {
    font-size: 10px;
  }
}

button:focus {
  outline: none;
}

#logo {
  position: absolute;
  top: 0%;
  left: 34%;
  width: 30%;
}

#optionsButton {
  position: absolute;
  top: 2%;
  right: 2%;
  width: 10%;
}

.active {
  background-image: url('/src/assets/open_pokeball_button.png');
}

@font-face {
  font-family: 'pokemon';
  src: local('pokemon'), url('/src/assets/fonts/Pokemon.ttf') format("truetype")
}
</style>
