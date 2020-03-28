const WebSocket = require('ws');
const { createServer } = require('http');
const url = require('url');

const createGameRoom = (req, res) => {
  const server = createServer(req.app);
  const wss = new WebSocket.Server({ noServer: true });

  wss.on('connection', (ws, message) => {
    console.log('connection open');
    ws.on('message', (data) => {
      wss.clients.forEach(function each(client) {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });
  });

  server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = url.parse(request.url).pathname;

    if (pathname === '/socket') {
      wss.handleUpgrade(request, socket, head, function done(ws) {
        wss.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });
};

module.exports = {
  createGameRoom,
};
