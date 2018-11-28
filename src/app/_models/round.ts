import {Topic} from './topic';

export class Round {
  constructor(
    public id: number = null,
    public name: string = null,
    public topics: Array<Topic> = new Array<Topic>()
  ) {}
}
