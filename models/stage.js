'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const Venue = require('./venue')

module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage.init({
    stage_id: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    venue_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Venue,
        key: "venue_id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });
  return Stage;
};