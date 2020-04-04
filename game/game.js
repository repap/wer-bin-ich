const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const store = require('./store/store');
const { initializeApp } = require('./actions/actions');

const Game = () => {
  const socket = new WebSocket.Server({ noServer: true });
  const id = uuidv4();

  const gameStore = store({ id, socket });
  gameStore.dispatch(initializeApp());

  socket.on('message', console.log);
  socket.on('connection', console.log);
  socket.on('error', console.log);
  socket.on('close', console.log);

  return {
    id,
    socket,
  };
};

module.exports = Game;
