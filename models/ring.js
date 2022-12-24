'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ring extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ring.init({
    ring_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    state: DataTypes.STRING,
    timetable: DataTypes.STRING,
    players: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ring',
    timestamps: false,
  });
  return ring;
};