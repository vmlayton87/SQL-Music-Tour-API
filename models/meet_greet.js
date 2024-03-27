'use strict';
const Event = require('./event')
const Band = require('./band')

const { Model, Deferrable } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event}) {
      // define association here
      Meet_Greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      Meet_Greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      
    }
  }
  Meet_Greet.init({
    meet_greet_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false
    },
    date: {
      type:DataTypes.DATE,
      allowNull:false
    },
    meet_start_time: {
      type:DataTypes.DATE,
      allowNull:false
    },
    meet_end_time: {
      type:DataTypes.DATE,
      allowNull:false
    },
    event_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references: {
        // This is a reference to another model
        model: Event,
  
        // This is the column name of the referenced model
        key: 'event_id',
  
        // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the Deferrable type.
        deferrable: Deferrable.INITIALLY_IMMEDIATE
        // Options:
        // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
        // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
        // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the rule in a transaction
      }
    },
    band_id: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Band,
        key: 'band_id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_Greet;
};