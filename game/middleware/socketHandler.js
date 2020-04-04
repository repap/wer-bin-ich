const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const {
  INITIALIZE_APP,
  APP_DISPATCH,
} = require('../actions/actionTypes');
const {
  addPlayer,
  appDispatch,
} = require('../actions/actions');

const socketListner = store => next => action => {
  if (action.type !== INITIALIZE_APP) {
    return next(action);
  }

  const socket = store.getState().socket;

  socket.on('connection', (ws, message) => {
    const playerId = uuidv4();
    store.dispatch(addPlayer(playerId));

    // TODO: reducer -> needs actions
    ws.on('message', (data) => {
      console.log('recieved', playerId, data);
      const action = data.action || { type: null };

      switch (action.type) {
        default:
          store.dispatch(appDispatch({ payload: data }))
      }
    });
  });
};

const socketDispatcher = store => next => action => {
  next(action);

  if (action.type === APP_DISPATCH) {
    const socket = store.getState().socket;

    socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(action.payload));
      }
    });
  }
};

module.exports = {
  socketListner,
  socketDispatcher,
};
