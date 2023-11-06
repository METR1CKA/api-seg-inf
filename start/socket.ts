import { getSalas, createSala } from 'App/Controller/Ws/SalasController'
import Ws from 'App/Services/Ws'

Ws.boot()

const { io } = Ws

io.on('connection', socket => {
  console.log('\nNueva conexion:', socket.id)

  console.log('\nMandando salas')

  socket.emit('get:salas', getSalas())

  socket.on('send:message', data => {
    console.log('\nMessage:', data)

    socket.broadcast.emit('get:messages', data)
  })

  socket.on('send:sala', sala => {
    console.log('\nSala:', { sala, tsala: typeof sala })

    sala = typeof sala == 'string'
      ? JSON.parse(sala)
      : sala

    createSala({ sala })

    const salas = getSalas()

    console.log('\nSala añadida, salas:', salas)

    io.emit('get:salas', salas)
  })
})

