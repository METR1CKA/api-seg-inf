/**
 * The above type represents a room with a name and a password.
 * @property {string} nombre - The "nombre" property is a string that represents the name of a sala
 * (room).
 * @property {string} password - The `password` property is a string that represents the password for a
 * particular `Salas` object.
 */
export type Salas = {
  nombre: string;
  password: string;
}

/* The code `export const Salas_Default: Salas[] = [...]` is creating a constant variable named
`Salas_Default` that is an array of objects of type `Salas`. Each object represents a room and has
two properties: `nombre` (name) and `password`. The array contains four room objects with their
respective names and passwords. */
export const Salas_Default: Salas[] = [
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
  },
]