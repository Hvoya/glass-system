export async function initTask (sequelize) {
  sequelize.define('Task', {
  }, {})
  await sequelize.models.Task.sync({ alter: true })
}
