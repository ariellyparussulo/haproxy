const WebSocket = require('ws');

const ws = new WebSocket('ws://websocket.server');

ws.on('open', function open() {
  console.log('connected');
  ws.send(Date.now());
});

ws.on('close', function close() {
  console.log('disconnected');
});

ws.on('message', function incoming(timestamp) {
  console.log(`Roundtrip time: ${Date.now() - timestamp} ms`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});