const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const store = require('./store/store');
const { initializeApp } = require('./actions/actions');

// TODO: own Class
const createPlayer = () => ({
  id: 1234
});



// TODO: create actions

const Game = () => {
  const socket = new WebSocket.Server({ noServer: true });
  const id = uuidv4();

  const gameStore = store({id, socket});
  gameStore.dispatch(initializeApp());

  console.log('game id', id);

  return {
    id,
    socket,
  }
};

module.exports = Game;
