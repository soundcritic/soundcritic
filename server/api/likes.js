const router = require('express').Router()
const {Artist, Track, Like} = require('../db/models')


//GET likes for single track
//GET /api/
router.get('/', async (req, res, next) => {
    try {
      const likes = await Like.findAll({
        include: [Artist, {model: Track}]
      })
      res.json(likes)
    } catch (err) { next(err) }
  })


//GET likes for single album (sum dislikes of all the tracks)
//GET /api/
router.get('/:artistId', async (req, res, next) => {
    try {
      const likesByArtist = await Like.findAll({where: {artistId: req.params.artistId}}, {
        include: [Artist, {model: Track}]
      })
      res.json(likesByArtist)
    } catch (err) { next(err) }
  })

module.exports = router
