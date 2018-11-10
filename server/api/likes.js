const router = require('express').Router()
const {Artist, Track, Like, Album} = require('../db/models')

//GET /api/likes
router.get('/', async (req, res, next) => {
  try {
    const likes = await Like.findAll({
      include: [Artist, {model: Track}]
    })
    res.json(likes)
  } catch (err) {
    next(err)
  }
})

//GET likes for single track
//GET /api/likes/track/:trackId
router.get('/track/:trackId', async (req, res, next) => {
  try {
    const likesByTrack = await Like.findAll({
      where: {trackId: req.params.trackId}
    })
    res.json(likesByTrack)
  } catch (err) {
    next(err)
  }
})

//GET likes for single album(sum likes of all the tracks on single the album)
//GET /api/likes/album/:artistId
router.get('/album/:albumId', async (req, res, next) => {
  try {
    const likesByAlbum = await Like.findAll({
      where: {albumId: req.params.albumId}
    })
    res.json(likesByAlbum)
  } catch (err) {
    next(err)
  }
})

//GET likes for single artist(sum likes of all the tracks on all the album)
//GET /api/likes/artist/:artistId
router.get('/artist/:artistId', async (req, res, next) => {
  try {
    const likesByArtist = await Like.findAll(
      {where: {artistId: req.params.artistId}},
      {
        include: [Artist, {model: Track}]
      }
    )
    res.json(likesByArtist)
  } catch (err) {
    next(err)
  }
})

//POST /api/likes
router.post('/', async (req, res, next) => {
  try {
    console.log('hi')
    const {latlong, track} = req.body
    const newLike = await Like.create({
      latlong,
      trackId: track.id,
      artistId: track.artistId
    })
    console.log(track)
    ///make associations

    res.json(newLike)
  } catch (err) {
    next(err)
  }
})

module.exports = router
