import SalasCreateValidator from 'App/Validators/SalasCreateValidator'
import SalasUpdateValidator from 'App/Validators/SalasUpdateValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorException from 'App/Exceptions/ValidatorException'
import Sala from 'App/Models/Sala'

export default class SalasController {
  /**
  * @get
  * @description Returns array of salas
  * @responseBody 200 - { "status": "Éxito", "message": "Salas encontradas", "data": [ { "id": "number", "nombre": "string", "password": "string", "active": "boolean", "created_at": "datetime", "updated_at": "datetime" } ] }
  */
  public async get({ response }: HttpContextContract) {
    return response.ok({
      status: 'Éxito',
      message: 'Salas encontradas',
      data: await Sala.all()
    })
  }

  /**
  * @get
  * @description Returns object of sala
  * @responseBody 200 - { "status": "Éxito", "message": "Sala encontrada", "data": { "id": "number", "nombre": "string", "password": "string", "active": "boolean", "created_at": "datetime", "updated_at": "datetime" } }
  * @responseBody 404 - { "status": "Éxito", "message": "Sala no encontrada", "data": "null" }
  */
  public async getId({ params, response }: HttpContextContract) {
    const sala = await Sala.find(params.id)

    if (!sala) {
      return response.notFound({
        status: 'Error',
        message: 'Sala no encontrada',
        data: null
      })
    }

    return response.ok({
      status: 'Éxito',
      message: 'Sala encontrada',
      data: sala
    })
  }

  /**
  * @create
  * @description Create a new sala
  * @requestBody {"nombre": "string", "password": "string"}
  * @responseBody 200 - { "status": "Éxito", "message": "Sala creada", "data": "null" }
  * @responseBody 400 - { "status": "Error", "message": "message validator", "data": { "field": "field", "rule": "rule" } }
  */
  public async create(ctx: HttpContextContract) {
    const { request, response } = ctx

    try {
      var data = await request.validate(SalasCreateValidator)
    } catch (error) {
      return new ValidatorException(ctx, error)
    }

    await Sala.create(data)

    return response.created({
      status: 'Éxito',
      message: 'Sala creada',
      data: null
    })
  }

  /**
   * @update
   * @description Update a sala
   * @requestBody {"nombre": "string", "password": "string"}
   * @responseBody 200 - { "status": "Éxito", "message": "Sala actualizada", "data": "null" }
   * @responseBody 400 - { "status": "Error", "message": "message validator", "data": { "field": "field", "rule": "rule" } }
   * @responseBody 404 - { "status": "Éxito", "message": "Sala no encontrada", "data": "null" }
  */
  public async update(ctx: HttpContextContract) {
    const { params, request, response } = ctx

    try {
      var data = await request.validate(SalasUpdateValidator)
    } catch (error) {
      return new ValidatorException(ctx, error)
    }

    const sala = await Sala.find(params.id)

    if (!sala) {
      return response.notFound({
        status: 'Error',
        message: 'Sala no encontrada',
        data: null
      })
    }

    await sala.merge(data).save()

    return response.created({
      status: 'Éxito',
      message: 'Sala actualizada',
      data: null
    })
  }

  /**
   * @delete
   * @description Delete a sala
   * @responseBody 200 - { "status": "Éxito", "message": "Sala desactivada o Sala activada", "data": "null" }
   * @responseBody 404 - { "status": "Éxito", "message": "Sala no encontrada", "data": "null" }
  */
  public async delete({ params, response }: HttpContextContract) {
    const sala = await Sala.find(params.id)

    if (!sala) {
      return response.notFound({
        status: 'Error',
        message: 'Sala no encontrada',
        data: null
      })
    }

    await sala.merge({ active: !sala.active }).save()

    return response.ok({
      status: 'Éxito',
      message: `Sala ${sala.active ? 'activada' : 'desactivada'}`,
      data: null
    })
  }
}
