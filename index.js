'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const leftPad = require('left-pad');
server.connection(
  {
    port : 8000
  }
);
server.register(Inert, function () {});
server.start(err => {
  if(err) {
    throw err;
  }
  console.log(server.info.uri);
});

server.route({
  method : 'GET',
  path : '/',
  handler : { file : __dirname + '/index.html'}
});
server.route({
  method : 'GET',
  path : '/main.css',
  handler : { file : __dirname + '/main.css'}
});

server.route({
  method : 'POST',
  path : '/api/padding/right/reverse',
  handler : (request, reply) => {
    try{
      console.log(request.payload.str.length);
      const padded = actualLeftPad(request.payload.str, request.payload.length, request.payload.char);
      reply(padded);
    }catch(err){
      reply('Back up your dependencies and think hard about if its the right choice for your project :^)');
    }
  }
});
function actualLeftPad (str, len, ch) {
  str = String(str);

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}
