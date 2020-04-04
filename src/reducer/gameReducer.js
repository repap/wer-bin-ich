import { ADD_SOCKET, REQUEST_NEW_GAME_SUCCESS } from '../actions/actionTypes';

const initialState = {
  players: [],
  gameId: null,
  socket: null,
};

// eslint-disable-next-line import/prefer-default-export
export const game = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_NEW_GAME_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
      };
    case ADD_SOCKET:
      return {
        ...state,
        socket: action.socket,
      };
    default:
      return state;
  }
};
