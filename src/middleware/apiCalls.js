import axios from 'axios';
import { REQUEST_NEW_GAME } from '../actions/actionTypes';
import { requestNewGameSuccess } from '../actions/actions';

const requestNewGame = async dispatch => {
  try {
    const { data } = await axios.post('/api/game');
    dispatch(requestNewGameSuccess(data.gameId));
  } catch (e) {
    console.error(e);
  }
};

export default store => next => action => {
  if (action.type === REQUEST_NEW_GAME) {
    requestNewGame(store.dispatch);
  }
  return next(action);
};
