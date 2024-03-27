'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Stage}) {
      // define association here
      Venue.hasMany(Stage, {
        foreignKey: "venue_id",
        as: "stages"
      })
    }
  }
  Venue.init({
    venue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false
    
    },
    location: {
      type: DataTypes.STRING,
      allowNull:false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Venue',
    tableName: 'venues',
    timestamps: false
  });
  return Venue;
};