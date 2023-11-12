import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sala extends BaseModel {
  @column({
    isPrimary: true,
  })
  public id: number

  @column()
  public nombre: string

  @column()
  public password: string

  @column()
  public active: boolean

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
}
