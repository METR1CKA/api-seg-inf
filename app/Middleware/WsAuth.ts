import type { WsContextContract } from '@ioc:Ruby184/Socket.IO/WsContext'

export default class WsAuthMiddleware {
  public async wsHandle({ auth, socket }: WsContextContract, next: () => Promise<void>) {
    const isLogged = await auth.use('api').check()

    if (!isLogged) {
      socket.emit('unauthorized', 'You are not authorized')
      socket.disconnect()
      return
    }

    await next()
  }
}
