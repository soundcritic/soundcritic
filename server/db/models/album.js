const Sequelize = require('sequelize')
const db = require('../db')

const Album = db.define('album', {
  title: Sequelize.STRING,
  artworkPath: Sequelize.STRING
})

module.exports = Album
