import { initWorker } from './Worker'
import { initTask } from './Task'
import { initOrder } from './Order'

export async function initModels (sequelize) {
  await initWorker(sequelize)
  await initOrder(sequelize)
  await initTask(sequelize)
}
