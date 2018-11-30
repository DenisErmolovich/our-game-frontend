import {Question} from './question';

export class Topic {
  constructor(
    public id: string = null,
    public mane: string = null,
    public questions: Array<Question> = new Array<Question>()
  ) {}
}
