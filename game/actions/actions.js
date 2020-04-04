const {
  ADD_PLAYER,
  SET_NEXT_PLAYER,
  SEND_ANSWER_NO,
  SEND_ANSWER_VICTORY,
  INITIALIZE_APP,
  APP_DISPATCH,
} = require('./actionTypes');

const addPlayer = () => ({
  type: ADD_PLAYER,
});

const setNextPlayer = () => ({
  type: SET_NEXT_PLAYER,
});

const sendAnswerNo = () => ({
  type: SEND_ANSWER_NO,
});

const sendAnswerVictory = () => ({
  type: SEND_ANSWER_VICTORY,
});

const initializeApp = () => ({
  type: INITIALIZE_APP,
});

const appDispatch = payload => ({
  type: APP_DISPATCH,
  payload,
});

module.exports = {
  addPlayer,
  setNextPlayer,
  sendAnswerNo,
  sendAnswerVictory,
  initializeApp,
  appDispatch,
};
