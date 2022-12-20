import { Module } from '@nestjs/common'
import { GameService } from './services/game.service'
import { GameGateway } from './gateways/game.gateway'
import { InstanceService } from './services/instance.service'
import { GameController } from './controllers/game.controller'

@Module({
    controllers: [GameController],
    providers: [GameGateway, GameService, InstanceService]
})
export class GameModule {}
