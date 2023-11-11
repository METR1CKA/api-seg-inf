import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SalasUpdateValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nombre: schema.string.optional({ trim: true }, [
      rules.maxLength(50)
    ]),
    password: schema.string.optional({ trim: true })
  })

  public messages: CustomMessages = {
    maxLength: "El campo '{{ field }}' no puede ser mayor a {{ options.maxLength }} caracteres",
    '*': (field, rule) => `El campo '${field}' es debe ser de tipo '${rule}'`
  }
}
