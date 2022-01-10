const { Server } = require('ws');

const wss = new Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('client connected');

  ws.on('message', function incoming(message) {
    console.log(`received: ${message}`);
  });

  ws.send(Date.now());
});