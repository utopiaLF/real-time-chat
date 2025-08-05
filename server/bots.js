const { io } = require('socket.io-client')

const SERVER_URL = 'http://localhost:3000'
const TOTAL_CLIENTS = 5000
const MESSAGE_INTERVAL = 1000

const clients = []

for (let i = 0; i < TOTAL_CLIENTS; i++) {
    setTimeout(() => {
        const socket = io(SERVER_URL, {
            transports: ['websocket'],
            reconnection: false
        })

        socket.on('connect', () => {
            const username = `Bot${i}`
            socket.emit('register')

            setInterval(() =>{
                const message = `${username}`
                socket.emit('new-message', message)
            }, MESSAGE_INTERVAL)
        })

        clients.push(socket)

        console.log(`Client count: ${i}`);
        
    }, i * 10)
}