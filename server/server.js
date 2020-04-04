require('dotenv').config();
const express = require('express');
const http = require('http');
const url = require('url');
const Game = require('../game/game');

const PORT = process.env.API_PORT || 9000;
const app = express();
const games = [];

app.route('/api/game').get((req, res) => {
  const game = Game();
  games.push(game);

  res.json({
    gameId: game.id,
  });
});

const server = http.createServer(app);

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = url.parse(request.url);

  const game = games.find(g => pathname === `/api/socket/${g.id}`);
  if (!game) {
    socket.destroy();
  } else {
    game.socket.handleUpgrade(request, socket, head, function done(ws) {
      game.socket.emit('connection', ws, request);
    });
  }
});

server.listen(PORT, err =>
  err ? console.error(err) : console.log(`App is Listening to port: ${PORT}`),
);
