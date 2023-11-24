import AdonisServer from '@ioc:Adonis/Core/Server'
import Env from '@ioc:Adonis/Core/Env'
import { Server } from 'socket.io'

class Ws {
  public io: Server
  private booted: boolean = false
  private instance = AdonisServer.instance!

  public boot(): void {
    const { booted, instance } = this

    if (booted) return

    this.booted = true

    this.io = new Server(instance, {
      cors: {
        origin: true,
      },
      path: Env.get('NODE_ENV') == 'development'
        ? '/socket.io'
        : '/web-socket'
    })
  }
}

export default new Ws()