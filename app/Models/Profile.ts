import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Profile extends BaseModel {
  @column({
    isPrimary: true
  })
  public id: number

  @column({
    serializeAs: null
  })
  public user_id: number

  @column()
  public name?: string

  @column()
  public lastname?: string

  @column()
  public phone?: string

  @column()
  public address?: string

  @column.dateTime({
    autoCreate: true,
    serialize: (value: DateTime) => value.toFormat('dd-MM-yyyy HH:mm:ss')
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value: DateTime) => value.toFormat('dd-MM-yyyy HH:mm:ss')
  })
  public updatedAt: DateTime

  @belongsTo(() => User, {
    localKey: 'id',
    foreignKey: 'user_id'
  })
  public user: BelongsTo<typeof User>
}
