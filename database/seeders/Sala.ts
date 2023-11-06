import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    await Sala.createMany([
      {
        nombre: 'Sala sebas',
        password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs='
      },
      {
        nombre: 'Sala fer',
        password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs='
      },
      {
        nombre: 'Sala ale',
        password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs='
      },
      {
        nombre: 'Sala hector',
        password: '3j1Dyq0r08TwYi/GDe7NBrNKDyWoDjC4H+BRo8VHmbs='
      }
    ])
  }
}
