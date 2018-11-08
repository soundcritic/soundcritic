const router = require('express').Router()
const {Album, Artist, Track} = require('../db/models')

//GET /api/albums
router.get('/', async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: [Artist]
    })
    res.json(albums)
  } catch (err) { next(err) }
})

//GET /api/:albumId
router.get('/:albumId', async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.albumId, {
      include: [Artist, {model: Track, include: [Artist]}]
    })
    res.json(album)
  } catch (err) { next(err) }
})

module.exports = router
