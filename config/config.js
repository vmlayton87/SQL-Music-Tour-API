require('dotenv').config()

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "music_tour",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "music_tour_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "music_tour_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
