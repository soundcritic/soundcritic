const router = require('express').Router()
const {Artist, Track, Dislike, Album} = require('../db/models')

//GET dislikes for single track
//GET /api/
router.get('/', async (req, res, next) => {
  try {
    const dislikes = await Dislike.findAll({
      include: [Artist, {model: Track}]
    })
    res.json(dislikes)
  } catch (err) {
    next(err)
  }
})
//GET dislikes for single track
//GET /api/dislikes/track/:trackId
router.get('/track/:trackId', async (req, res, next) => {
  try {
    const dislikesByAlbum = await Dislike.findAll({
      where: {trackId: req.params.trackId}
    })
    res.json(dislikesByAlbum)
  } catch (err) {
    next(err)
  }
})

//GET dislikes for single album(sum dislikes of all the tracks on single the album)
//GET /api/dislikes/album/:artistId
router.get('/album/:albumId', async (req, res, next) => {
  try {
    const dislikesByAlbum = await Dislike.findAll({
      where: {albumId: req.params.albumId}
    })
    res.json(dislikesByAlbum)
  } catch (err) {
    next(err)
  }
})
//GET dislikes for single artist (sum dislikes of all the tracks on all albums)
//GET /api/dislikes/

router.get('/artist/:artistId', async (req, res, next) => {
  try {
    const dislikesByArtist = await Dislike.findAll(
      {where: {artistId: req.params.artistId}},
      {
        include: [Artist, {model: Track}]
      }
    )
    res.json(dislikesByArtist)
  } catch (err) {
    next(err)
  }
})

//POST /api/dislikes
router.post('/', async (req, res, next) => {
  try {
    console.log(`hi`)
    const {latlong, trackData} = req.body
    const newLike = await Dislike.create({
      latlong,
      trackId: trackData.id,
      artistId: trackData.artistId,
      albumId: trackData.albumId
    })
    ///make associations
    const artist = await Artist.findById(trackData.artistId)
    const album = await Album.findById(trackData.albumId)
    const track = await Track.findById(trackData.id)
    await track.addDislike(newLike)
    await artist.addDislike(newLike)
    await album.addDislike(newLike)

    let newNumDislikes = track.dataValues.numDislikes
    newNumDislikes++
    await Track.update(
      {numDislikes: newNumDislikes},
      {
        where: {id: track.id},
        returning: true
      }
    )

    await Track.update(
      {rating: track.numLikes / (track.numLikes + track.numDislikes) * 100},
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

module.exports = router
