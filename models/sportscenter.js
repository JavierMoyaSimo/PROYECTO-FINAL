'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sportscenter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sportscenter.hasMany(models.game)
    }
  }
  sportscenter.init({
    sportscenter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    province: DataTypes.STRING,
    rings: DataTypes.INTEGER,
    timetable: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'sportscenter',
    timestamps: false,
  });
  return sportscenter;
};