// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')
// before sequelize cli:
// const sequelize = new Sequelize(process.env.DB_CONNECTION)

// MODEL: represents a table
class Band extends Model{}

// ClassName.init({
//     // column configuration here
// }, {
//     // extra options here 
// })

// initializes a table and it's columns
Band.init({
    band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize, // connects to the database in Postgres
    modelName: 'Band', 
    tableName: 'band',
    timestamps: false
}) 


// EXPORT
module.exports = Band
