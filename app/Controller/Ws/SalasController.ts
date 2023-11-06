import Sala from 'App/Models/Sala'

export const getSalas = async (): Promise<any[]> => {
  const salas = await Sala.all()

  console.log('salas1', salas.map(sala => sala.toJSON()))
  console.log('salas2', salas.map(sala => sala.serialize()))

  return salas.map(sala => {
    const { nombre, password } = sala

    return {
      nombre,
      password,
    }
  })
}

export const createSala = async ({ sala }: { sala: Sala }): Promise<void> => {
  await Sala.create(sala)
}