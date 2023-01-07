// import { Injectable } from '@nestjs/common';
// import { Instance } from '../interfaces/instance.interface'
// import { InstanceService } from './instance.service'

// @Injectable()
// export class GameService {
//     updateBall(instance: Instance, x: number, y: number): void {
//         instance.ball.lastPos.x = instance.ball.pos.x
//         instance.ball.lastPos.y = instance.ball.pos.y
//         instance.ball.pos.x = x
//         instance.ball.pos.y = y
//         InstanceService.emit(instance, 'ball', instance.ball.pos)
//     }

//     resetBall(instance: Instance): void {
//         instance.speed = instance.gameOptions.ball.speed
//         this.updateBall(instance.gameOptions.show.width / 2, instance.gameOptions.show.height / 2, instance)
//     }
    
//     update(instance: Instance): any {
        
//     }
// }
