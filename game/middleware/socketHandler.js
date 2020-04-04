const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const {
  INITIALIZE_APP,
  APP_DISPATCH,
  SOCKET_MESSAGE,
} = require('../actions/actionTypes');
const { addPlayer, appDispatch } = require('../actions/actions');

const socketListner = store => next => action => {
  if (action.type !== INITIALIZE_APP) {
    return next(action);
  }

  const { socket } = store.getState();

  socket.on('connection', (ws, message) => {
    const playerId = uuidv4();
    store.dispatch(addPlayer(playerId));
    // console.log('recieved', message);

    // TODO: reducer -> needs actions
    ws.on('message', data => {
      console.log('recieved', playerId, data);
      const wsAction = JSON.parse(data) || { type: null };

      switch (wsAction.type) {
        case SOCKET_MESSAGE:
          return store.dispatch(wsAction);
        default:
          return null;
      }
    });
  });
  return null;
};

const socketDispatcher = store => next => action => {
  next(action);

  if (action.type === APP_DISPATCH) {
    const { socket } = store.getState();

    socket.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(action));
      }
    });
  }
};

module.exports = {
  socketListner,
  socketDispatcher,
};
