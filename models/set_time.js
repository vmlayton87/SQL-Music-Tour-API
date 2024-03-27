'use strict';
const {
  Model, Deferrable
} = require('sequelize');

const Event = require('./event')
const Stage = require('./stage')
const Band = require('./band')

module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event, Stage, Band}) {
      // define association here
      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      Meet_Greet.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
    }
  }
  Set_time.init({
    set_time_id: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    set_start_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    set_end_time: {
      type:DataTypes.DATE,
      allowNull: false
    },
    event_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Event,
        key: "event_id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    stage_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Stage,
        key: "stage_id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    band_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Band,
        key: "band_id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_time;
};