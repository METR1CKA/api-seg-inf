import { Server } from 'socket.io'
import AdonisServer from '@ioc:Adonis/Core/Server'

class Ws {
  /* `public io: Server` is declaring a public property `io` of type `Server`. This property will be
  used to store an instance of the `Server` class from the `socket.io` library. */
  public io: Server
  /* The line `private booted: boolean = false` is declaring a private property `booted` of type
  `boolean` and initializing it with the value `false`. This property is used to keep track of
  whether the `boot()` method has been called or not. */
  private booted: boolean = false
  /* The line `private instance = AdonisServer.instance!` is declaring a private property `instance`
  and initializing it with the value of `AdonisServer.instance`. The `!` symbol is a non-null
  assertion operator in TypeScript, which tells the compiler that the value of
  `AdonisServer.instance` will not be null or undefined. */
  private instance = AdonisServer.instance!
  /* The line `private configs = { cors: { origin: true } }` is declaring a private property `configs`
  and initializing it with an object. This object has a property `cors` which itself is an object
  with a property `origin` set to `true`. */
  private configs = {
    cors: {
      origin: true
    }
  }

  /**
   * The function initializes a server instance if it has not already been initialized.
   * @returns If the `booted` flag is already set to `true`, then nothing is being returned. The
   * function will exit early and no value will be returned.
   */
  public boot(): void {
    const { booted, instance, configs } = this

    if (booted) return

    this.booted = true

    this.io = new Server(instance, configs)
  }
}

export default new Ws()