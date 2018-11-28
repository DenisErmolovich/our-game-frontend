import {Question} from './question';

export class SuperRound {
  constructor(
    public id: number = null,
    public questions: Array<Question> = new Array<Question>()
  ) {}
}
