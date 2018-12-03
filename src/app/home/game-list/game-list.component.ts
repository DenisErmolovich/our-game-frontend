import { Component, OnInit } from '@angular/core';
import {GameService} from '../../_services/data/local-storage/game.service';
import {Game} from '../../_models/game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  public games: Array<Game>;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.games = this.gameService.getAll();
  }

}
