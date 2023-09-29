import SalasController from 'App/Controller/SalasController'
import Ws from 'App/Services/Ws'

Ws.boot()

const { io } = Ws

io.on('connection', socket => {
  console.log('\nNueva conexion:', socket.id)

  console.log('\nMandando salas')
  socket.emit('get:salas', SalasController.getSalas())

  socket.on('send:message', data => {
    console.log('\nMessage:', data)

    socket.broadcast.emit('get:messages', data)
  })

  socket.on('send:sala', sala => {
    console.log('\nSala:', { sala, tsala: typeof sala })

    sala = typeof sala == 'string'
      ? JSON.parse(sala)
      : sala

    SalasController.createSala({ sala })

    const salas = SalasController.getSalas()

    console.log('\nSala añadida, salas:', salas)

    io.emit('get:salas', salas)
  })
})

// Using Sebas logic
/* import Ws from 'App/Services/Ws'

Ws.boot()

const { io } = Ws

class Sala {
  nombre: string;
  password: string;

  constructor(nombre: string, password: string) {
    this.nombre = nombre;
    this.password = password;
  }


  static fromJson(json: { nombre: string, password: string }): Sala {
    console.log("Sala Json")
    console.log(json)

    return new Sala(json["nombre"], json["password"]);
  }

}

const nuevaSala = new Sala("Sala dd", "3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=");
const nuevaSala1 = new Sala("memnnas", "3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=");
const nuevaSala2 = new Sala("Salaasasas", "3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs=");

const salas = [nuevaSala, nuevaSala1, nuevaSala2];

//List variable of dicts(nameSala, pass)



io.on('connection', socket => {
  console.log('new connection')
  console.log("Mandando salas")
  socket.emit('get:salas', salas)




  // All sockets except the current socket retrieve messages
  socket.on('send:message', data => {


    console.log(data)
    socket.broadcast.emit('get:messages', data)
  })

  socket.on('send:sala', (data) => {
    console.log("Sala recibida")

    // console.log(data)
    // console.log(typeof data)

    try {
      // Intenta analizar la cadena JSON
      data = JSON.parse(data)

      // console.log(data)
      // console.log(typeof data)

    } catch (error) {
      console.error("Error al analizar JSON:", error)
    }


    // Verifica si los datos recibidos son válidos

    const salaJson = Sala.fromJson(data)
    //console.log(salaJson)
    salas.push(salaJson)
    console.log("Sala añadida")
    // console.log(salas)
    // Emite el array actualizado
    io.emit('get:salas', salas)

  })
}) */
