interface IGameConfig {
    fps: number,
    framesThisSecond: number,
    lastFpsUpdate: number,
    lastFrameTimeMs: number,
    maxFPS: number,
    delta: number,
    frameId: number,
    keyUp: boolean,
    keyDown: boolean,
    running: boolean,
    started: boolean
}

export default IGameConfig