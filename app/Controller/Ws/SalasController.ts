import Sala from 'App/Models/Sala'

export const getSalas = async (): Promise<any[]> => {
  const salas = (
    await Sala.all()
  ).map(sala => {
    const { nombre, password } = sala

    return {
      nombre,
      password,
    }
  })

  return salas
}

export const createSala = async ({ sala }: { sala: Sala }): Promise<void> => {
  await Sala.create(sala)
}