import {
  GameState,
  PlayerActionTypes,
  CREATE_PLAYER,
  REMOVE_PLAYER,
} from "./types";

const initialState: GameState = {
  players: [],
};

export function gameReducers(
  state = initialState,
  action: PlayerActionTypes
): GameState {
  switch (action.type) {
    case CREATE_PLAYER:
      return {
        players: [...state.players, action.payload],
      };
    case REMOVE_PLAYER:
      return {
        players: state.players.filter(
          (message) => message.name !== action.meta.name
        ),
      };
    default:
      return state;
  }
}
