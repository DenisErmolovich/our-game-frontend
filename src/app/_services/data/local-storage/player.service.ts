import { Injectable } from '@angular/core';
import {PlayerServiceInterface} from '../player-service-interface';
import {GameService} from './game.service';
import {User} from '../../../_models/user';

@Injectable({
  providedIn: 'root'
})
export class PlayerService implements PlayerServiceInterface {

  constructor(
    private gameService: GameService
  ) { }

  getPlayersByGameId(gameId: string): Array<User> {
    return this.gameService.getById(gameId).players;
  }
}
