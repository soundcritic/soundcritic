const Sequelize = require('sequelize')
const db = require('../db')

// navigator.geolocation.getCurrentPosition(
//   onPositionReceived,
//   locationNotReceived,
//   { timeout: 5 }
// )
//onpositionedRecieved returns on object with lat and long on it
//so we will store it as a JSONB
const Likes = db.define('likes', {
  latlong: Sequelize.ARRAY(Sequelize.FLOAT)
})

module.exports = Likes
