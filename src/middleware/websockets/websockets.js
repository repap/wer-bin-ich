// listener
// dispatcher
// socket setup

import { ADD_PLAYER, CREATE_SOCKET } from '../../actions/actionTypes';
import handleWebSocketCall from './handleWebSocketCall';
import initWebSocket from './initWebSocket';

export default store => next => action => {
  switch (action.type) {
    case CREATE_SOCKET:
      return initWebSocket(store.dispatch, action.gameId);
    case ADD_PLAYER:
      return handleWebSocketCall(store, action);
    default:
      return next();
  }
};
