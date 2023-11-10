import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('get/:id?', 'SalasController.get')
  Route.post('create', 'SalasController.create')
  Route.put('update', 'SalasController.update')
  Route.delete('delete', 'SalasController.delete')
})
  .prefix('api/v1/salas')
