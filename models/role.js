'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roles.hasMany(models.users);
    }
  }
  roles.init({
    role_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'roles',
    timestamps: false,
    freezeTableName: true
  });
  return roles;
};