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
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      isNumeric: true,
      validate: {
        len: [9, 9]
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rings: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isNumeric: true,
    },
    timetable: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cif: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  }, {
    sequelize,
    modelName: 'sportscenters',
    timestamps: false,
    freezeTableName: true
  });
  return sportscenters;
};