import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoundService} from '../../../../_services/data/local-storage/round.service';
import {SuperRound} from '../../../../_models/super-round';

@Component({
  selector: 'app-super-round',
  templateUrl: './super-round.component.html',
  styleUrls: ['./super-round.component.scss']
})
export class SuperRoundComponent implements OnInit {
  public gameId: string;
  public superRound: SuperRound;

  constructor(
    private activateRout: ActivatedRoute,
    private roundService: RoundService
  ) { }

  ngOnInit() {
    this.gameId = this.activateRout.snapshot.paramMap.get('gameId');
    this.superRound = this.roundService.getSuperRound(this.gameId);
  }

}
