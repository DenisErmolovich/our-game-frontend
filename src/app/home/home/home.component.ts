import { Component, OnInit } from '@angular/core';
import {GameService} from '../../_services/data/local-storage/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() { }

  public newGame(): void {
    this.gameService.initGameFromJson();
  }

}
