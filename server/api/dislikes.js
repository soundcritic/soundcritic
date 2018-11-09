const router = require('express').Router()
const Dislike = require('../db/models')
const Sequelize = require('sequelize')
//GET dislikes for single track
//GET /api/

//GET dislikes for single album (sum dislikes of all the tracks)
//GET /api/

//POST /api/dislikes
router.post('/', async (req, res, next) => {
  try {
    const {latlong, track} = req.body


    const newLike = await Dislike.create({
      latlong
    })
    ///make associations

    res.json(newLike)
  } catch (err) {
    next(err)
  }
})

module.exports = router
