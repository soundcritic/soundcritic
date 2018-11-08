const Sequelize = require('sequelize')
const db = require('./db')

const Track = db.define('track', {
  title: Sequelize.STRING,
  audioPath: Sequelize.STRING, //I changed this from audioUrl to audioPath
  //incase we create a local folder to store audio files, or maybe just make it audio
  genre: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  sliderRating: Sequelize.ARRAY(Sequelize.JSONB), //if we use JSONB we can store an object with the slider name and rating like this {name: 'guitar', 87}, but this can be restructured
  likes: Sequelize.INTEGER,
  dislikes: Sequelize.INTEGER
})

module.exports = Track
