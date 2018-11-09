const router = require('express').Router()
const {Album, Artist, Track} = require('../db/models')

//GET /api/tracks
router.get('/', async (req, res, next) => {
    try {
      const albums = await Track.findAll({
        include: [
            {
            model: Artist,
            //attributes: ['name']
        },
        {
            model: Album,
            //attributes: ['title', 'artworkPath']
        }
    ]
      })
      res.json(albums)
    } catch (err) { next(err) }
  })

  module.exports = router
