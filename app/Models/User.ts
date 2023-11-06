import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne,
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import { DateTime } from 'luxon'
import Profile from './Profile'
import Role from './Role'

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

  @column()
  public rememberMeToken: string | null

  @column()
  public username: string

  @column()
  public active: boolean

  @column({
    serializeAs: null
  })
  public role_id: number

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

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => Profile, {
    localKey: 'id',
    foreignKey: 'user_id'
  })
  public profile: HasOne<typeof Profile>

  @belongsTo(() => Role, {
    localKey: 'id',
    foreignKey: 'role_id'
  })
  public role: BelongsTo<typeof Role>
}
