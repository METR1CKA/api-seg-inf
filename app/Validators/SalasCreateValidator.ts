import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SalasCreateValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    nombre: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(50)
    ]),
    password: schema.string({ trim: true }, [
      rules.required()
    ])
  })

  public messages: CustomMessages = {
    required: "El campo '{{ field }}' es requerido",
    maxLength: "El campo '{{ field }}' no puede ser mayor a {{ options.maxLength }} caracteres",
    '*': (field, rule) => `El campo '${field}' es debe ser de tipo '${rule}'`
  }
}
