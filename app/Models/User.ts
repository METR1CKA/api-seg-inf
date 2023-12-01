import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import { DateTime } from 'luxon'

export default class User extends BaseModel {
  @column({
    isPrimary: true
  })
  public id: number

  @column()
  public email: string

  @column({
    serializeAs: null
  })
  public password: string

  @column({
    serializeAs: null
  })
  public rememberMeToken: string | null

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.toFormat('yyyy-MM-dd HH:mm:ss')
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.toFormat('yyyy-MM-dd HH:mm:ss')
  })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
