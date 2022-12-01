import IBall from "../models/IBall"
import IPaddle from "../models/IPaddle"
import IScore from "../models/IScore"
import ITable from "../models/ITable"
import IPlayer from "../models/IPlayer"
import IGameConfig from "../models/IGameConfig"
import { time } from "console"

export class Game {
    gameConfig: IGameConfig
    ball: IBall
    ownerPaddle: IPaddle
    adversePaddle: IPaddle
    ownerScore: IScore
    adverseScore: IScore
    table: ITable
    context: CanvasRenderingContext2D | null
    id: number

    constructor(canvas: HTMLCanvasElement | null, 
                gameConfig: IGameConfig, 
                ball: IBall, 
                ownerPaddle: IPaddle, 
                adversePaddle: IPaddle, 
                ownerScore: IScore, 
                adverseScore: IScore, 
                table: ITable,
                id: number, 
                players: Array<IPlayer>) {
        canvas!.width = table.width
        canvas!.height = table.height
        this.context = canvas!.getContext('2d')
        this.gameConfig = gameConfig
        this.ball = ball
        this.ownerPaddle = ownerPaddle
        this.adversePaddle = adversePaddle
        this.ownerScore = ownerScore
        this.adverseScore = adverseScore
        this.table = table
        this.id = id
    }

    private drawPaddles(multi: number) {
        this.context!.fillRect(50, this.ownerPaddle.lastPos + 
                                (this.ownerPaddle.pos - this.ownerPaddle.lastPos) *
                                multi, this.ownerPaddle.width, this.ownerPaddle.height)
        this.context!.fillRect(650, this.adversePaddle.lastPos +
                                (this.adversePaddle.pos - this.adversePaddle.lastPos) *
                                multi, this.adversePaddle.width, this.adversePaddle.height)
    }

    private drawBall(multi: number) {
        this.context!.arc(this.ball.lastPosX +
                            (this.ball.posX - this.ball.lastPosX) *
                            multi, this.ball.posY, this.ball.ray, 0, 2 * Math.PI)
    }

    private drawScores() {
        this.context!.fillText(this.ownerScore.score.toString(), this.ownerScore.pos, 100)
        this.context!.fillText(this.adverseScore.score.toString(), this.adverseScore.pos, 100)
    }

    private updateBall() {
        this.ball.lastPosX = this.ball.posX
        this.ball.lastPosY = this.ball.posY
        this.ball.posX += this.ball.speedX * 1000 / 60
        this.ball.posY += this.ball.speedY * 1000 / 60
        if (this.ball.posX >= 750 || this.ball.posX <= 0)
            this.ball.speedX = -this.ball.speedX
        if (this.ball.posY >= 500 || this.ball.posY <= 0)
            this.ball.speedY = -this.ball.speedY
    }

    private updatePaddle(id: number, multi: number) {
    }

    private updateScore(score: number) {
    }

    private beginLoop() {
        this.context!.fillStyle = "white"
        this.context!.font = "75px monospace"
    }

    private endLoop() {

    }

    private panic() {
        this.gameConfig.delta = 0
        //
        // remettre les variables du jeu en position backend
        //
    }

    private loop(timestamp: number) {
        let panicLimit = 0
        if (timestamp < this.gameConfig.lastFrameTimeMs + (1000 / this.gameConfig.maxFPS)) {
            requestAnimationFrame(this.loop.bind(this))
            return
        }
        this.gameConfig.delta += timestamp - this.gameConfig.lastFrameTimeMs
        this.gameConfig.lastFrameTimeMs = timestamp
        if (timestamp > this.gameConfig.lastFpsUpdate + 1000) {
            this.gameConfig.fps = 0.25 * this.gameConfig.framesThisSecond + 0.75 * this.gameConfig.fps
            this.gameConfig.lastFpsUpdate = timestamp
            this.gameConfig.framesThisSecond = 0
        }
        ++this.gameConfig.framesThisSecond
        while (this.gameConfig.delta >= 1000 / 60) {
            this.update()
            this.gameConfig.delta -= 1000 / 60
            if (++panicLimit > 240) {
                this.panic()
                break
            }
        }
        this.draw(this.gameConfig.delta / timestamp)
        requestAnimationFrame(this.loop.bind(this))
    }

    public update() {
        this.updateBall()
        //this.updatePaddle()
        //this.updateScore
        //this.draw()
    }

    public draw(multi: number) {
        this.context!.clearRect(0, 0, this.table.width, this.table.height)
        this.context!.fillText(Math.round(this.gameConfig.fps).toString(), 0, 60)
        this.drawPaddles(multi)
        this.drawBall(multi)
        this.drawScores()
    }

    public startLoop() {
            this.gameConfig.frameId = requestAnimationFrame((timestamp) => {
                this.draw(1)
                this.gameConfig.lastFrameTimeMs = timestamp
                this.gameConfig.lastFpsUpdate = timestamp
                this.gameConfig.framesThisSecond = 0
                this.beginLoop()
                this.gameConfig.frameId = requestAnimationFrame(this.loop.bind(this))
            })
    }

    public stopLoop() {
        this.endLoop()
        cancelAnimationFrame(this.gameConfig.frameId)
    }
}