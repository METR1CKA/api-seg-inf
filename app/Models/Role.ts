import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Database from '@ioc:Adonis/Lucid/Database'
import User from './User'

export default class Role extends BaseModel {
  @column({
    isPrimary: true
  })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public active: boolean

  @hasMany(() => User, {
    localKey: 'id',
    foreignKey: 'role_id'
  })
  public users: HasMany<typeof User>

  public static async getRoles(): Promise<any> {
    const currentRoles = await Database.query()
      .from('roles')
      .select(['id', 'name'])
      .orderBy('id', 'asc')

    const values = currentRoles.map(role => Object.values(role).reverse())

    return Object.fromEntries(values)
  }
}
