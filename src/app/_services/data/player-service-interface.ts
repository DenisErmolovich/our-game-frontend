import {User} from '../../_models/user';

export interface PlayerServiceInterface {
  getPlayersByGameId(gameId: string): Array<User>;
}
