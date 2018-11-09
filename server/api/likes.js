const router = require('express').Router()
const Like = require('../db/models')

//GET dislikes for single track
//GET /api/

//GET dislikes for single album (sum dislikes of all the tracks)
//GET /api/

router.post('/', async (req, res, next) => {
  try {
    const {lat, long} = req.body
    const newLike = await Like.create({
      lat,
      long
    })

    res.json(newLike)
  } catch (err) {
    next(err)
  }
})



module.exports = router
