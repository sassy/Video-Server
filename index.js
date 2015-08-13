
var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port : 4000})
  , fs = require('fs');

wss.on('connection', function connection(ws) {

  ws.on('message', function (message) {
    console.log('received:', message);
    sendData(ws);
  })

  ws.on('close', function() {
    //TODO
  });
});

function sendData(ws) {
  var path = __dirname + '/files/big-buck-bunny_trailer.webm';
  fs.readFile(path, function(err, data) {
    if (!err) {
      ws.send(data);
    }
  });
}
