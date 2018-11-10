const router = require('express').Router()
const {Artist, Track, Like, Album} = require('../db/models')

//POST /api/likes
router.post('/', async (req, res, next) => {
  try {
    const {latlong, trackData} = req.body
    const newLike = await Like.create({
      latlong,
      trackId: trackData.id,
      artistId: trackData.artistId,
      albumId: trackData.albumId
    })
    ///make associations
    const artist = await Artist.findById(trackData.artistId)
    const album = await Album.findById(trackData.albumId)
    const track = await Track.findById(trackData.id)

    await track.addLike(newLike)
    await artist.addLike(newLike)
    await album.addLike(newLike)

    let newNumLikes = track.dataValues.numLikes
      newNumLikes++
      await Track.update(
        {numLikes: newNumLikes},
        {
          where: {id: track.id},
          returning: true
        }
      )
      await Track.update(
        {rating:  ((track.numLikes/(track.numLikes+track.numDislikes))*100)},
        {
          where: {id: track.id},
          returning: true
        }
      )

    res.json(newLike)
  } catch (err) {
    next(err)
  }
})
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

module.exports = router
