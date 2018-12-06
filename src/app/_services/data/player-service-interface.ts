import {User} from '../../_models/user';

export interface PlayerServiceInterface {
  getPlayersByGameId(gameId: string): Array<User>;
  updateScore(gameId: string, roundId: string, questionId: string, userId: string, isRight: boolean): void;
}
