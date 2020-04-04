const {
  ADD_PLAYER,
  SET_NEXT_PLAYER,
  SEND_ANSWER_NO,
  SEND_ANSWER_VICTORY,
  INITIALIZE_APP,
} = require('../actions/actionTypes');

const initialState = {
  players: [],
};

// TODO: reducer
const game = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        lastAction: action.type,
      };
    case SET_NEXT_PLAYER:
      return {
        ...state,
        lastAction: action.type,
      };
    case SEND_ANSWER_NO:
      return {
        ...state,
        lastAction: action.type,
      };
    case SEND_ANSWER_VICTORY:
      return {
        ...state,
        lastAction: action.type,
      };
    case INITIALIZE_APP:
      return {
        ...state,
        socket: action.socket,
        lastAction: action.type,
      };
    default:
      return state;
  }
};
module.exports = game;
