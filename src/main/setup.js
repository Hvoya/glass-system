import { app } from 'electron'

import { initModels } from './models/init'
import { checkStorage } from './utils/checkStorage'

export async function setup () {
  const sequelize = checkStorage(app)
  await initModels(sequelize)
  await sequelize.models.Worker.create({
    firstName: 'Ivan',
    lastName: 'Petrov'
  })
}
