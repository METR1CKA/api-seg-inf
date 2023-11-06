import Application from '@ioc:Adonis/Core/Application'
import { Salas, Salas_Default } from 'App/Model/Ws/Salas'
import fs from 'fs'

const dirname = Application.makePath('storage')
const fullpath = `${dirname}/salas.json`

const createDefaultSalas = (): void => {
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)

    fs.writeFileSync(fullpath, JSON.stringify(Salas_Default))
  }
}

createDefaultSalas()

export const getSalas = (): Salas[] => {
  return JSON.parse(
    fs.readFileSync(fullpath, 'utf-8')
  )
}

export const createSala = ({ sala }: { sala: Salas }): void => {
  const salas = getSalas()

  salas.push(sala)

  fs.writeFileSync(fullpath, JSON.stringify(salas))
}