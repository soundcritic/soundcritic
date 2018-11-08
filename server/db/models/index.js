const Album = require('./album')
const Artist = require('./artist')
const Track = require('./track')
const Like = require('./like')
const Dislike = require('./dislike')
const Slider = require('./slider')

Like.belongsTo(Track)
Track.hasMany(Like)

Dislike.belongsTo(Track)
Track.hasMany(Dislike)

Slider.belongsTo(Track)
Track.hasMany(Slider)

Track.belongsTo(Album)
Album.hasMany(Track)

Track.belongsTo(Artist)
Artist.hasMany(Track)

Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = {
  Album,
  Artist,
  Track,
  Like,
  Dislike,
  slider
}
