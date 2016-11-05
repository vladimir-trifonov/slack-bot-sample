module.exports = function (io, src) {
    io.on('connection', function(socket) {
        socket.on('user:login', function(payload) {
            if(payload !== process.env.LOGIN_TOKEN) {
                return socket.disconnect();
            }

            
            src.on('data:user', function(data) {
                socket.emit('data:user', data);
            });
        })
    });
}
