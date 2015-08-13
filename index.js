
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port : 4000});

wss.on('connection', function connection(ws) {

  ws.on('message', function (message) {
    console.log('received:', message);
    ws.send('received');
  })

  ws.on('close', function() {
    //TODO
  });
});
