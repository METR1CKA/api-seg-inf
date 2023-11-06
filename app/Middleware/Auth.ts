import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    const isLoggedIn = await auth.use('api').check()

    if (!isLoggedIn) {
      const { isAuthenticated } = auth.use('api')

      return response.unauthorized({
        message: 'No autenticado',
        data: {
          isAuthenticated
        }
      })
    }

    await next()
  }
}
