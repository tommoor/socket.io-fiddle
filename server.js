
const express = require('express');
const socket_io = require('socket.io');
const debug = require('debug')('socket:test');

debug('starting server');
var app = express();
srv = app.listen(3001, function() {
  var httpServer = this;

  let io = socket_io(httpServer, {
    transports: ['websocket']
  });
  let nsp = io.of('/hub');
  nsp.on('connection', socket => {
    debug('connection', socket.id);

    // Buffer not sent! String yeah.
    var buf = Buffer.from('hello you!', 'utf8')

    // var buf = new ArrayBuffer(16);
    // ArrayBuffer.
    // debug('emiting a', Buffer.isBuffer(buf) ? 'Buffer' : 'String');
    socket.emit('data', buf, response => {
      debug('data response', response);
    });
  });
});