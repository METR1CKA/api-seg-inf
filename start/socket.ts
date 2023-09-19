import Ws from 'App/Services/Ws'

Ws.boot()

const { io } = Ws

io.on('connection', socket => {
  // All sockets except the current socket retrieve messages
  socket.on('send:message', data => {
    console.log(data)
    socket.broadcast.emit('get:messages', data)
  })
})
