import Ws from 'App/Services/Ws'

Ws.boot()

Ws.io.on('connection', (socket) => {
  socket.emit('news', { status: 'ok' })

  socket.on('other event', (data) => {
    console.log(data)
  })
})
