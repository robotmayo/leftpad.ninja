'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
const padString = require('pad-string');
server.connection({port : 8000});
server.start(err => {
  if(err) {
    throw err;
  }
  console.log(server.info.uri);
});

server.route({
  method : 'GET',
  path : '/',
  handler : { file : 'index.html'}
});

server.route({
  method : 'POST',
  path : '/pad',
  handler : (request, reply) => {
    if(typeof req.payload.str !== 'string' 
    || typeof req.payload.length !== number
    || typeof req.payload.char !== 'string'){ 
      return reply(400);
    }
    reply(leftPad(req.payload.str, req.payload.length, req.payload.char));
  }
});
