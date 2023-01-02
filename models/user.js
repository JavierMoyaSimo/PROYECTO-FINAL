'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.bookings);
      users.belongsTo(models.roles);
    }
  }
  users.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        len: [1, 20]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
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
    roleRoleId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "roles",
        key: "role_id",
      },
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false,
    freezeTableName: true
  });
  return users;
};