
const debug = require('debug')('socket:test');

debug('starting client');
var client = require('socket.io-client')('http://localhost:3001/hub', {
  transports: ['websocket']
});

client.on('connect', () => {
  debug('connected');
});

client.on('data', (data, ack) => {
  debug('data', data);
  ack(Buffer.from('hi!', 'utf8'));
});