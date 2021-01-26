export async function initOrder (sequelize) {
  sequelize.define('Task', {
  }, {})
  await sequelize.models.Task.sync({ alter: true })
}
