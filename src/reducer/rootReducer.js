import { combineReducers } from 'redux';
import { game } from './gameReducer';
import { chat } from './chatReducer';

export default combineReducers({
  game,
  chat,
});
