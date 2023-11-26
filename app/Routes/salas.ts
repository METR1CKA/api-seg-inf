import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('get', 'SalasController.get')
  Route.get('get/:id', 'SalasController.getId')
  Route.post('create', 'SalasController.create')
  Route.put('update/:id', 'SalasController.update')
  Route.delete('delete/:id', 'SalasController.delete')
})
  .prefix('api/v1/salas')
