import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlayerService} from '../../../_services/data/local-storage/player.service';
import {User} from '../../../_models/user';

@Component({
  selector: 'app-layout-with-score',
  templateUrl: './layout-with-score.component.html',
  styleUrls: ['./layout-with-score.component.scss']
})
export class LayoutWithScoreComponent implements OnInit {
  private gameId: string;
  public players: Array<User>;

  constructor(
    private router: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.gameId = this.router.snapshot.paramMap.get('gameId');
    this.getPlayers(this.gameId);
  }

  private getPlayers(gameId: string): void {
    this.players = this.playerService.getPlayersByGameId(gameId);
  }
}
