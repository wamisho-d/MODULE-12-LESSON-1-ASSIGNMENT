const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


io.on('connection', (socket) => {
    console.log('New client connected');

    // Recieve a new message and broadcast it to all connected clients
    socket.on('sendMessage', (message) => {
        io.emit('recieveMessage', message);

    });

    socket.on('disconnect', () => {
        console.log('Client dsconnected');

    });

});

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});
