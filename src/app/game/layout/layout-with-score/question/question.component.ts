import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../../../_services/data/local-storage/question.service';
import {Question} from '../../../../_models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public gameId: string;
  public roundId: string;
  public questionId: string;
  public question: Question;

  constructor(
    private activateRout: ActivatedRoute,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    const paramMap = this.activateRout.snapshot.paramMap;
    this.gameId = paramMap.get('gameId');
    this.roundId = paramMap.get('roundId');
    this.questionId = paramMap.get('questionId');
    this.question = this.questionService.getQuestion(this.gameId, this.roundId, this.questionId);
  }

}
