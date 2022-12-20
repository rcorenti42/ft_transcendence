import { Injectable } from '@nestjs/common';
import { GameService } from './game.service';
import { GameOptions } from '../interfaces/game-options.interface'
import { Socket } from 'socket.io';
import { Instance } from '../interfaces/instance.interface';

@Injectable()
export class InstanceService {
    gameOptions: GameOptions = {ball: {speed: 0.3, ray: 7}, paddle: {width: 10, height: 80, pos: 30}, score: {max: 11}, show: {width: 858, height: 525}}
    waitingLine: Array<Socket> = []
    instances: Map<string, Instance> = new Map()

    constructor(game: GameService) {}

    emit(instance: Instance, ev: string, ...args: any[]) {
    }

    addInLine(socket: Socket) {
    }

    
}
