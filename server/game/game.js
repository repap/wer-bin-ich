const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');

// TODO: own Class
const createPlayer = () => ({
  id: 1234
});

// TODO: reducer
const initialState = {
  players: [],
};

// TODO: create actions

const Game = () => {
  // TODO: reducer
  const state = initialState;
  const wss = new WebSocket.Server({ noServer: true });
  const gameId = uuidv4();

  wss.on('connection', (ws, message) => {
    const playerId = uuidv4();
    console.log('connected', playerId, 'to', gameId);

    // TODO: reducer -> needs actions
    ws.on('message', (data) => {
      console.log('recieved', playerId, data);
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(`${playerId}: ${data}`);
        }
      });
    });
  });

  console.log('game id', gameId);

  return {
    id: gameId,
    socket: wss,
  }
};

module.exports = Game;
