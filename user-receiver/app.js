var app = require('express')();
var server = require('http').Server(app);

var io = require('socket.io')(server);

var usersService = require('./server/services/users');
require('./server/configs/socket')(io, usersService);

require('./server/configs/express')(app);
require('./server/configs/routes')(app);

server.listen();
