const router = require('express').Router()
const {Album, Artist, Track, Like, Dislike} = require('../db/models')

//GET /api/artists
router.get('/', async (req, res, next) => {
    try {
      const artists = await Artist.findAll({
        include: [Like, Dislike]
      })
      res.json(artists)
    } catch (err) { next(err) }
  })


//GET /api/artists/:artistId
router.get('/:artistId', async (req, res, next) => {
    try {
      const artist = await Artist.findById(req.params.artistId, {
        include: [Album, {model: Track, include: [Like, Dislike]}]
      })
      res.json(artist)
    } catch (err) { next(err) }
  })
  
  module.exports = router