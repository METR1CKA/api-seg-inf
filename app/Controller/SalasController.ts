import Application from '@ioc:Adonis/Core/Application'
import { Salas, Salas_Default } from 'App/Model/Salas'
import fs from 'fs'

class SalasController {
  /* The line `private path = Application.makePath('storage/salas.json')` is creating a private
  property called `path` and assigning it the value returned by the `makePath` method of the
  `Application` class. */
  private path = Application.makePath('storage/salas.json')
  /* The line `private salas: Salas[] = []` is declaring a private property called `salas` and
  initializing it as an empty array of type `Salas[]`. This property is used to store the list of
  `Salas` objects. */
  private salas: Salas[] = []

  /**
   * The constructor function checks if a file exists and creates it if it doesn't, then returns the
   * instance of the class.
   * @returns The constructor is returning the instance of the class.
   */
  constructor() {
    if (!fs.existsSync(this.path)) {
      fs.writeFileSync(this.path, JSON.stringify(Salas_Default))
    }

    return this
  }

  /**
   * The function `getSalas` reads a file, parses its contents as JSON, and returns an array of `Salas`
   * objects.
   * @returns The method is returning an array of objects of type "Salas".
   */
  public getSalas(): Salas[] {
    this.salas = JSON.parse(
      fs.readFileSync(this.path).toString('utf-8')
    )

    return this.salas
  }

  /**
   * The function `createSala` reads a JSON file, adds a new object to an array, and then writes the
   * updated array back to the file.
   * @param  - The `createSala` function takes an object as a parameter with a property `sala` of type
   * `Salas`. The `sala` parameter represents the sala object that needs to be created.
   */
  public createSala({ sala }: { sala: Salas }): void {
    this.salas = JSON.parse(
      fs.readFileSync(this.path).toString('utf-8')
    )

    this.salas.push(sala)

    fs.writeFileSync(this.path, JSON.stringify(this.salas))
  }
}

export default new SalasController()