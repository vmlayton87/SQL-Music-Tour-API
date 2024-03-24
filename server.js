// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const {sequelize} = require('./models')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//before sequelize cli
// // SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.DB_CONNECTION)
const testSequelize = async () => {
    try {
        await sequelize.authenticate() 
        console.log(`Connected to the database.`) 
    } catch(err) {
        console.log(`Unable to connect to PG: ${err}`) 
    }
}



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, async () => {
    await testSequelize()
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})