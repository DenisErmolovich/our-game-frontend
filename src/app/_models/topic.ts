import {Question} from './question';

export class Topic {
  constructor(
    public id: number = null,
    public mane: string = null,
    public questions: Array<Question> = new Array<Question>()
  ) {}
}
