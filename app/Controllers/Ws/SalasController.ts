import Sala from 'App/Models/Sala'

export const getSalas = async (): Promise<any[]> => {
  return (
    await Sala.all()
  ).map(sala => {
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