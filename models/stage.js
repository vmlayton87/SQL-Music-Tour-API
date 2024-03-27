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
    static associate({Event, Stage_event, Set_time, Venue}) {
      // define association here
      Stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: Stage_event
      })
      Stage.hasMany(Set_time, {
        foreignKey: "stage_id",
        as: "stages"
      })
      Stage.belongsTo(Venue, {
        foreignKey: "venue_id",
        as: "venue"
      })
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