'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      booking.belongsTo(models.ring);
      booking.belongsTo(models.user);
    }
  }
  booking.init({
    booking_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    date: DataTypes.DATE,
    ring_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "ring",
        key: "ring_id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
      },
    },
  }, {
    sequelize,
    modelName: 'booking',
    timestamps: false,
  });
  return booking;
};