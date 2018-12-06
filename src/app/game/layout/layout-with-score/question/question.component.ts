import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../../../_services/data/local-storage/question.service';
import {Question} from '../../../../_models/question';
import {QuestionState} from '../../../../_enums/question-state.enum';
import {QuestionTypes} from '../../../../_enums/question-types.enum';
import {PlayerService} from '../../../../_services/data/local-storage/player.service';
import {User} from '../../../../_models/user';

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
  public state = QuestionState.QUESTION;
  public players: Array<User>;

  constructor(
    private activateRout: ActivatedRoute,
    private questionService: QuestionService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.initParams();
    this.question = this.questionService.getQuestion(this.gameId, this.roundId, this.questionId);
    this.players = this.playerService.getPlayersByGameId(this.gameId);
    this.checkState();
  }

  public showTopic(): void {
    if (this.question.topic) {
      this.state = QuestionState.TOPIC;
    } else {
      this.state = QuestionState.QUESTION;
    }
  }

  public showQuestion(): void {
    this.state = QuestionState.QUESTION;
  }

  public showAnswer(): void {
    this.state = QuestionState.ANSWER;
  }

  private initParams(): void {
    const paramMap = this.activateRout.snapshot.paramMap;
    this.gameId = paramMap.get('gameId');
    this.roundId = paramMap.get('roundId');
    this.questionId = paramMap.get('questionId');
  }

  private checkState(): void {
    if (this.question.type === QuestionTypes.AUCTION || this.question.type === QuestionTypes.CAT) {
      this.state = QuestionState.TYPE;
    }
    if (this.question.isAnswered) {
      this.state = QuestionState.ANSWER;
    }
  }

}
