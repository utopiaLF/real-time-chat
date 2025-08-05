const express = require('express')
const cors = require('cors')
const { Server } = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
})

app.use(cors())

io.on('connection', (socket) => {
    // console.log('User connected', socket.id)
    socket.on('setUsername', (username) => {
        socket.data.username = username
        socket.emit('setUsername', socket.data.username)
        console.log(`${socket.data.username} connected`);
        
    })
    // socket.userId = socket.id
    // socket.emit('register', socket.userId)
    
    socket.on('new-message', (text) => {
        io.emit('chat-message', {
            from: socket.data.username,
            text
        })
    })

    socket.on('typing', (user) => {
        socket.broadcast.emit('typing', user)
    })

    socket.on('stopTyping', (user) =>{
        socket.broadcast.emit('stopTyping', user)
    })

    socket.on('clearChat', () => {
        io.emit('clearChat')
    })
})

server.listen(3000, '0.0.0.0')