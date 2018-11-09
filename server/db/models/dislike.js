const Sequelize = require('sequelize')
const db = require('../db')

// navigator.geolocation.getCurrentPosition(
//   onPositionReceived,
//   locationNotReceived,
//   { timeout: 5 }
// )
//onpositionedRecieved returns on object with lat and long on it
//so we will store it as a JSONB
const Dislike = db.define('dislike', {
  lat: Sequelize.FLOAT,
  long: Sequelize.FLOAT
})

module.exports = Dislike
