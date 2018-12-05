import { Injectable } from '@angular/core';
import {RoundServiceInterface} from '../round-service-interface';
import {Round} from '../../../_models/round';
import {GameService} from './game.service';

@Injectable({
  providedIn: 'root'
})
export class RoundService implements RoundServiceInterface {

  constructor(
    private gameService: GameService
  ) { }

  public getRound(gameId, roundId): Round {
    return this.gameService.getById(gameId).rounds.find(round => round.id === roundId);
  }
}
