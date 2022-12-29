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
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    roleId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "roles",
        key: "role_id",
      },
    },
    dni: DataTypes.STRING,
    level: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false,
    freezeTableName: true
  });
  return users;
};