import {Roles} from '../_enums/roles.enum';

export class User {
  constructor(
    public id: number = null,
    public name: string = null,
    public role: Roles = null
  ) {}
}
