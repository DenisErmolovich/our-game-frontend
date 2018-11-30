import {QuestionTypes} from '../_enums/question-types.enum';

export class Question {
  constructor(
    public id: string = null,
    public type: QuestionTypes = null,
    public topic: string = null,
    public text: string = null,
    public image: string = null,
    public answer: string = null
  ) {}
}
