<script lang="ts">
import Vue from 'vue';
import IGameConfig from '../models/IGameConfig'
import IBall from '../models/IBall'
import IPaddle from '../models/IPaddle'
import IScore from '../models/IScore'
import ITable from '../models/ITable'
import { Game } from '../controllers/Game' 
import { timeStamp } from 'console';
import { start } from 'repl';

export default {
  data() {
    return {
      game: <Game | null> null,
      canvas: <HTMLCanvasElement> document.getElementById('gameCanvas'),
      winner: ''
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
    ball: {
      get() {
        return this.$store.getters.getPlayer
      },
      set(val: IBall) {
        this.$store.commit('setBall', val)
      }
    },
    ownerPaddle: {
      get() {
        return this.$store.getters.getOwnerPaddle
      },
      set(val: IPaddle) {
        this.$store.commit('setOwnerPaddle', val)
      }
    },
    adversePaddle: {
      get() {
        return this.$store.getters.getAdversePaddle
      },
      set(val: IPaddle) {
        this.$store.commit('setAdversePaddle', val)
      }
    },
    ownerScore: {
      get() {
        return this.$store.getters.getOwnerScore
      },
      set(val: IScore) {
        this.$store.commit('setOwnerScore', val)
      }
    },
    adverseScore: {
      get() {
        return this.$store.getters.getAdverseScore
      },
      set(val: IScore) {
        this.$store.commit('setAdverseScore', val)
      }
    },
    table: {
      get() {
        return this.$store.getters.getTable
      },
      set(val: ITable) {
        this.$store.commit('setTable', val)
      }
    },
    player: {
      get() {
        return this.$store.getters.getPlayer
      },
      set() {}
    }
  },
  methods: {
    // update(delta: number) {
    //   this.lastPos = this.pos
    //   this.pos += this.speed * delta
    //   if (this.pos >= this.limit || this.pos <= 0)
    //     this.speed = -this.speed
    // },
    quit() {
      this.$router.push('/hub')
    },
    handleKeyUp(e: KeyboardEvent) {
    },
    handleKeyDown(e: KeyboardEvent) {
    }
  },
  mounted() {
    // 
    // temporaire, est censé recevoir les données depuis le backend
    //
    this.ball.posX = 50
    this.ball.posY = 50
    this.ball.lastPosX = 0
    this.ball.lastPosY = 0
    this.ball.speedX = 5
    this.ball.speedY = 5
    this.ball.ray = 7
    this.ownerPaddle.height = 80
    this.ownerPaddle.width = 10
    this.ownerPaddle.pos = 30
    this.ownerPaddle.lastPos = 0
    this.ownerPaddle.speed = 0
    this.adversePaddle.height = 80
    this.adversePaddle.width = 10
    this.adversePaddle.pos = 30
    this.adversePaddle.lastPos = 0
    this.adversePaddle.speed = 0
    this.table.width = 750
    this.table.height = 500
    this.ownerScore.pos = 250
    this.ownerScore.maximum = 11
    this.ownerScore.score = 0
    this.adverseScore.pos = 450
    this.adverseScore.maximum = 11
    this.adverseScore.score = 0
    this.gameConfig.fps = 60
    this.gameConfig.framesThisSecond = 0
    this.gameConfig.lastFpsUpdate = 0
    this.gameConfig.lastFrameTimeMs = 0
    this.gameConfig.maxFPS = 144
    this.gameConfig.delta = 0
    this.gameConfig.frameId = 0
    //
    //
    //
    this.canvas = <HTMLCanvasElement> document.getElementById('gameCanvas')
    this.game = new Game(this.canvas, this.gameConfig, this.ball, this.ownerPaddle, this.adversePaddle, this.ownerScore, this.adverseScore, this.table, this.player.id, this.$store.getters.getIGPlayers)
    this.game.startLoop()
    document.addEventListener('keyup', this.handleKeyUp)
    document.addEventListener('keydown', this.handleKeyDown)
  },
  unmounted() {
    this.game!.stopLoop()
    document.removeEventListener('keyup', this.handleKeyUp)
    document.removeEventListener('keydown', this.handleKeyDown)
  }
}
</script>

<template>
  <div>
    <canvas id="gameCanvas"></canvas>
  </div>
</template>

<style scoped>
canvas {
  background-color: black;
}
</style>
