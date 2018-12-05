import { Injectable } from '@angular/core';
import {QuestionServiceInterface} from '../question-service-interface';
import {Question} from '../../../_models/question';
import {GameService} from './game.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService implements QuestionServiceInterface {

  constructor(
    private gameService: GameService
  ) { }

  public getQuestion(gameId: string, roundId: string, questionId: string): Question {
    const game = this.gameService.getById(gameId);
    if (roundId === 'super') {
      return game.superRound.questions.find(question => question.id === questionId);
    } else {
      const round = game.rounds.find(item => item.id === roundId);
      for (const topic of round.topics) {
        const question = topic.questions.find(item => item.id === questionId);
        if (question) {
          return question;
        }
      }
      return undefined;
    }
  }

  public countQuestionValue(gameId: string, roundId: string, questionId: string): number {
    const game = this.gameService.getById(gameId);
    for (let roundNumber = 0; roundNumber < game.rounds.length; roundNumber++) {
      const round = game.rounds[roundNumber];
      if (round.id === roundId) {
        for (let topicNumber = 0; topicNumber < round.topics.length; topicNumber++) {
          const topic = round.topics[topicNumber];
          for (let questionNumber = 0; questionNumber < topic.questions.length; questionNumber++) {
            const question = topic.questions[questionNumber];
            if (question.id === questionId) {
              return (game.settings.minPrice * (questionNumber + 1)) * (roundNumber + 1);
            }
          }
        }
      }
    }
    return null;
  }
}
