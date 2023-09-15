// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ws from 'App/Services/Ws'

export default class ChatsController {
  public async sendMessage() {
    Ws.io.emit('send:message', { message: 'Hello world' })
  }
}
