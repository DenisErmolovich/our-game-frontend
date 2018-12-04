import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from '../../../_services/data/local-storage/game.service';
import {Game} from '../../../_models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public game: Game;

  constructor(
    private router: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit() {
   const gameId = this.router.snapshot.paramMap.get('gameId');
   this.gameService.getById(gameId);
  }

}
