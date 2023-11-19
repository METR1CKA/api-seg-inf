import SalasCreateValidator from 'App/Validators/SalasCreateValidator'
import SalasUpdateValidator from 'App/Validators/SalasUpdateValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidatorException from 'App/Exceptions/ValidatorException'
import Sala from 'App/Models/Sala'

export default class SalasController {
  public async get({ params, response }: HttpContextContract) {
    const salas = await Sala.all()

    if (params.id) {
      const sala = salas.find(sala => sala.id == params.id)

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

    return response.ok({
      status: 'Éxito',
      message: 'Salas encontradas',
      data: salas
    })
  }

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
