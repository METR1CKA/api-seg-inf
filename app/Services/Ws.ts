import { Server } from 'socket.io'
import AdonisServer from '@ioc:Adonis/Core/Server'

class Ws {
  public io: Server
  private booted: boolean = false
  private instance = AdonisServer.instance!
  private configs = {
    cors: {
      origin: true
    }
  }

  public boot(): void {
    const { booted, instance, configs } = this

    if (booted) return

    this.booted = true

    this.io = new Server(instance, configs)
  }
}

export default new Ws()