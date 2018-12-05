import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Round} from '../../../../_models/round';
import {RoundService} from '../../../../_services/data/local-storage/round.service';
import {QuestionService} from '../../../../_services/data/local-storage/question.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {
  public gameId: string;
  public roundId: string;
  public round: Round;

  constructor(
    private activateRout: ActivatedRoute,
    private roundService: RoundService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    const paramMap = this.activateRout.snapshot.paramMap;
    this.gameId = paramMap.get('gameId');
    this.roundId = paramMap.get('roundId');
    this.round = this.roundService.getRound(this.gameId, this.roundId);
  }

  public getQuestionValue(questionId: string): number {
    return this.questionService.countQuestionValue(this.gameId, this.roundId, questionId);
  }

}
