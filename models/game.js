'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      games.belongsTo(models.sportscenters);
      games.hasMany(models.bookings);
    }
  }
  games.init({
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    players: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sportscenter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "sportscenters",
        key: "sportscenter_id",
      },
    },
  }, {
    sequelize,
    modelName: 'games',
    timestamps: false,
    freezeTableName: true
  });
  return games;
};