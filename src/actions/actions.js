import {
  ADD_PLAYER,
  SET_NEXT_PLAYER,
  SEND_ANSWER_NO,
  SEND_ANSWER_VICTORY,
  APP_DISPATCH,
  ADD_SOCKET,
  REMOVE_SOCKET,
  CREATE_SOCKET,
  SEND_MESSAGE,
  REQUEST_NEW_GAME,
  REQUEST_NEW_GAME_SUCCESS,
} from './actionTypes';

export const addPlayer = () => ({
  type: ADD_PLAYER,
});

export const setNextPlayer = () => ({
  type: SET_NEXT_PLAYER,
});

export const sendAnswerNo = () => ({
  type: SEND_ANSWER_NO,
});

export const sendAnswerVictory = () => ({
  type: SEND_ANSWER_VICTORY,
});

export const appDispatch = payload => ({
  type: APP_DISPATCH,
  payload,
});

export const requestNewGame = () => ({
  type: REQUEST_NEW_GAME,
});

export const requestNewGameSuccess = gameId => ({
  type: REQUEST_NEW_GAME_SUCCESS,
  gameId,
});

export const createSocket = gameId => ({
  type: CREATE_SOCKET,
  gameId,
});

export const sendMessage = message => ({
  type: SEND_MESSAGE,
  message,
});

export const addSocket = socket => ({
  type: ADD_SOCKET,
  socket,
});

export const removeSocket = () => ({
  type: REMOVE_SOCKET,
});
