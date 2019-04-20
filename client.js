
const port = process.env.PORT || 3000;
const socket = require('socket.io-client')('http://localhost:' + port);

socket.on('connect', onConnect);

function onConnect(){
  console.log('connect ' + socket.id);

  socket.on('event', data => {
    console.log('event received on client', data);
  })
}
