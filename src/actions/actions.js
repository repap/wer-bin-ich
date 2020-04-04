import {
  ADD_PLAYER,
  SET_NEXT_PLAYER,
  SEND_ANSWER_NO,
  SEND_ANSWER_VICTORY,
  INITIALIZE_APP,
  APP_DISPATCH,
} from "../actions/actionTypes";

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

export const appDispatch = (payload) => ({
  type: APP_DISPATCH,
  payload,
});
