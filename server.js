
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve("my private DM"), ms));
}

io.on('connect', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('disconnect', () => console.log('disconnect ' + socket.id));

  [1,2,3].forEach(async () => {
    console.log("sending to private room");
    io.to('my-private-room').emit('event', {
      data: await sleep(100)
    });
  });
}
