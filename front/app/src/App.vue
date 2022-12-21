<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  el: '#app'
})
</script>

<template>
    <div>
      <router-link to="/">
        <img id="logo" src="/src/assets/pokepong_logo.png" alt="logo">
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
  height: 150px;
  width: 150px;
  font-family: "pokemon";
  font-size: 25px;
  color: rgb(255, 200, 0);
  text-shadow: 1px 1px 2px rgb(25, 0, 255), 0 0 1em rgb(0, 0, 0), 0 0 0.2em rgb(2, 175, 255);
}

button:focus {
  outline: none;
}

.active {
  background-image: url('/src/assets/open_pokeball_button.png');
}

@font-face {
  font-family: 'pokemon';
  src: local('pokemon'), url('/src/assets/fonts/Pokemon.ttf') format("truetype")
}
</style>
