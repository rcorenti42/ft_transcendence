interface IGameConfig {
    fps: number,
    framesThisSecond: number,
    lastFpsUpdate: number,
    lastFrameTimeMs: number,
    maxFPS: number,
    delta: number,
    frameId: number,
    running: boolean,
    started: boolean
}

export default IGameConfig