'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const Stage = require('./stage')
const Event = require('./event')

module.exports = (sequelize, DataTypes) => {
  class Stage_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_event.init({
    stages_events_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Stage,
        key: "stage_id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Event,
        key: "event_id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'Stage_event',
    tableName: 'stage_events',
    timestamps: false
  });
  return Stage_event;
};