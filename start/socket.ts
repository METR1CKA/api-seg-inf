import { getSalas, createSala } from 'App/Controllers/Ws/SalasController'
import Ws from 'App/Services/Ws'

Ws.boot()

const { io } = Ws

io.on('connection', async socket => {
  socket.emit('get:salas', await getSalas())

  socket.on('send:message', data => {
    console.log('\nMessage:', data)

    socket.broadcast.emit('get:messages', data)
  })

  socket.on('send:sala', async sala => {
    sala = typeof sala == 'string'
      ? JSON.parse(sala)
      : sala

    await createSala({ sala })

    io.emit('get:salas', await getSalas())
  })
})

