import { DataTypes } from 'sequelize'

export async function initWorker (sequelize) {
  sequelize.define('Worker', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    }
  }, {})
  await sequelize.models.Worker.sync({ alter: true })
}
