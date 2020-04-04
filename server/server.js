require('dotenv').config();
const express = require('express');
const http = require('http');
const url = require('url');
const Game = require('../game/game');

const PORT = process.env.API_PORT || 9000;
const app = express();
const server = http.createServer(app);

const games = [];

app.route('/api/game').post((req, res) => {
  const game = Game();
  games.push(game);

  res.json({
    gameId: game.id,
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = url.parse(request.url);
  console.log('request', pathname);

  const game = games.find(g => pathname === `/api/socket/${g.id}`);
  if (!game) {
    socket.destroy();
  } else {
    console.log('connection request', game.id);
    game.socket.handleUpgrade(request, socket, head, function done(ws) {
      game.socket.emit('connection', ws, request);
    });
  }
});

server.listen(PORT, err =>
  err ? console.error(err) : console.log(`App is Listening to port: ${PORT}`),
);
