<script lang="ts">

export default ({
})
</script>

<template>
    <div>
      <!-- <button id="chatButton" @click="$router.push('chat')"><div id="buttonContent">CHAT</div></button> -->
      <!-- <button id="gameButton" @click="$router.push('hub')"><div id="buttonContent">GAME</div></button> -->
      <router-link to="chat">
        <img id="chatButton" alt="chatButton" src="/src/assets/pokeball_button.png">
      </router-link>
      <div id="chatButtonContent">
        <b>test</b>
      </div>
      <!-- <router-link to="hub">
        <img id="gameButton" alt="gameButton" src="/src/assets/pokeball_button.png">
      </router-link> -->
    </div>
</template>

<style scoped>
#chatButton {
  width: 10%;
  position: absolute;
  top: 40%;
  left: 40%;
}

#gameButton {
  width: 200px;
}
</style>
