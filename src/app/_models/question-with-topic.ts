import {Question} from './question';

export class QuestionWithTopic extends Question {
  constructor(
    public topic: string = null
  ) {
    super();
  }
}
