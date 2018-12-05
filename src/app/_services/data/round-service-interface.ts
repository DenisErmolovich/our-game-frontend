import {Round} from '../../_models/round';

export interface RoundServiceInterface {
  getRound(gameId, roundId): Round;
}
