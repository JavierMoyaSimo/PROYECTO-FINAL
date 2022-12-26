'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sportscenters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sportscenters.hasMany(models.games)
    }
  }
  sportscenters.init({
    sportscenter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    province: DataTypes.STRING,
    rings: DataTypes.INTEGER,
    timetable: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sportscenters',
    timestamps: false,
    freezeTableName: true
  });
  return sportscenters;
};