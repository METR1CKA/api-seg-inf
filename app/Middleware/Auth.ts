import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    const isLogged = await auth.use('api').check()

    if (!isLogged) {
      return response.unauthorized({
        status: 'Error',
        message: 'No autorizado, token invalido o expirado',
        data: {
          isLogged
        }
      })
    }

    await next()
  }
}
