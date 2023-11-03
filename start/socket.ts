import SalasController from 'App/Controller/SalasController'
import Ws from 'App/Services/Ws'

/* `Ws.boot()` is a method that initializes the WebSocket server. It is typically called at the start
of the application to set up the WebSocket server and establish a connection. */
Ws.boot()

/* `const { io } = Ws` is destructuring the `io` property from the `Ws` object. It allows you to
directly access the `io` property without having to use `Ws.io`. */
const { io } = Ws

/* The code block `io.on('connection', socket => { ... })` is an event listener that is triggered
whenever a new client connects to the WebSocket server. */
io.on('connection', socket => {
  console.log('\nNueva conexion:', socket.id)

  console.log('\nMandando salas')
  /* The code `socket.emit('get:salas', SalasController.getSalas())` is emitting a custom event called
  `'get:salas'` to the connected client. It is sending the result of the
  `SalasController.getSalas()` function as the data payload of the event. */
  socket.emit('get:salas', SalasController.getSalas())

  /* The code block `socket.on('send:message', data => { ... })` is an event listener that is triggered
  when the client emits a custom event called `'send:message'`. */
  socket.on('send:message', data => {
    console.log('\nMessage:', data)

    /* `socket.broadcast.emit('get:messages', data)` is emitting a custom event called `'get:messages'`
    to all connected clients except the client that triggered the event (`socket`). It sends the
    `data` payload as the data of the event. This allows all other clients to receive and handle the
    `'get:messages'` event and the associated data. */
    socket.broadcast.emit('get:messages', data)
  })

  /* The code block `socket.on('send:sala', sala => { ... })` is an event listener that is triggered
  when the client emits a custom event called `'send:sala'`. */
  socket.on('send:sala', sala => {
    console.log('\nSala:', { sala, tsala: typeof sala })

    /* The code `sala = typeof sala == 'string' ? JSON.parse(sala) : sala` is checking the type of the
    `sala` variable. */
    sala = typeof sala == 'string'
      ? JSON.parse(sala)
      : sala

    /* `SalasController.createSala({ sala })` is calling the `createSala` method of the
    `SalasController` class and passing an object with a property `sala` as an argument. The
    `createSala` method is responsible for creating a new sala (room) and adding it to the list of
    salas. The `sala` argument contains the data for the new sala. */
    SalasController.createSala({ sala })

    /* `const salas = SalasController.getSalas()` is calling the `getSalas()` method of the
    `SalasController` class and assigning the returned value to the `salas` variable. */
    const salas = SalasController.getSalas()

    console.log('\nSala añadida, salas:', salas)

    /* `io.emit('get:salas', salas)` is emitting a custom event called `'get:salas'` to all connected
    clients. It sends the `salas` variable as the data payload of the event. This allows all clients
    to receive and handle the `'get:salas'` event and access the updated list of salas. */
    io.emit('get:salas', salas)
  })
})

