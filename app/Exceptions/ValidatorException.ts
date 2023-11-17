import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'


export default class ValidatorException {
  constructor({ response }: HttpContextContract, Err: any) {
    const { messages: { errors: [error] } } = Err

    const { message, field, rule } = error

    if (Env.get('NODE_ENV') === 'development') {
      console.error(error)
    }

    response.badRequest({
      status: 'Error',
      message: message,
      data: {
        field,
        rule
      }
    })
  }
}
