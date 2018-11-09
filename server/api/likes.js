const router = require('express').Router()
const Like = require('../db/models')
const Sequelize = require('sequelize')

//GET dislikes for single track
//GET /api/

//GET dislikes for single album (sum dislikes of all the tracks)
//GET /api/


//POST /api/likes
router.post('/', async (req, res, next) => {
  try {
    console.log('hi')
    const {latlong, track} = req.body
    const newLike = await Like.create({
      latlong
    })
    ///make associations

    res.json(newLike)
  } catch (err) {
    next(err)
  }
})



module.exports = router
