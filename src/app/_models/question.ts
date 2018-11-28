import {QuestionTypes} from '../_enums/question-types.enum';

export class Question {
  constructor(
    public id: number = null,
    public type: QuestionTypes = null,
    public text: string = null,
    public image: string = null,
    public answer: string = null
  ) {}
}
