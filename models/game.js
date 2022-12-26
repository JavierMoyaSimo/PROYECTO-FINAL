'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game.belongsTo(models.sportscenter);
      game.hasMany(models.booking);
    }
  }
  game.init({
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type: DataTypes.STRING,
    teamOne: DataTypes.STRING,
    teamTwo: DataTypes.STRING,
    date: DataTypes.DATE,
    timetable: DataTypes.STRING,
    sportscenter_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "sportscenter",
        key: "sportscenter_id",
      },
    },
  }, {
    sequelize,
    modelName: 'game',
    timestamps: false,
  });
  return game;
};