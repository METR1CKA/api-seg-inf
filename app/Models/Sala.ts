import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sala extends BaseModel {
  @column({
    isPrimary: true,
    serializeAs: null
  })
  public id: number

  @column()
  public nombre: string

  @column()
  public password: string

  @column({
    serializeAs: null
  })
  public active: boolean

  @column.dateTime({
    autoCreate: true,
    serializeAs: null
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serializeAs: null
  })
  public updatedAt: DateTime
}
