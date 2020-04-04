import { CREATE_SOCKET, SEND_MESSAGE } from '../../actions/actionTypes';
import handleWebSocketCall from './handleWebSocketCall';
import initWebSocket from './initWebSocket';

export default store => next => action => {
  switch (action.type) {
    case CREATE_SOCKET:
      return initWebSocket(store.dispatch, action.gameId);
    case SEND_MESSAGE:
      return handleWebSocketCall(store, action);
    default:
      return next();
  }
};
