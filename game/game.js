const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const store = require('./store/store');
const { initializeApp } = require('./actions/actions');

const Game = () => {
  const socket = new WebSocket.Server({ noServer: true });
  const id = uuidv4();

  const gameStore = store({ id, socket });
  gameStore.dispatch(initializeApp());

  socket.on('message', () => console.log('message'));
  socket.on('connection', () => console.log('connection'));
  socket.on('error', () => console.log('error'));
  socket.on('close', () => console.log('close'));

  return {
    id,
    socket,
  };
};

module.exports = Game;
