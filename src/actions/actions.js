import {
  ADD_PLAYER,
  SET_NEXT_PLAYER,
  SEND_ANSWER_NO,
  SEND_ANSWER_VICTORY,
  INITIALIZE_APP,
  APP_DISPATCH,
  ADD_SOCKET,
  REMOVE_SOCKET,
  CREATE_SOCKET,
  SEND_MESSAGE,
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

export const initializeApp = () => ({
  type: INITIALIZE_APP,
});

export const appDispatch = payload => ({
  type: APP_DISPATCH,
  payload,
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
