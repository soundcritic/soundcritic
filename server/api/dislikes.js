const router = require('express').Router()
const { Artist, Track, Dislike } = require('../db/models')


//GET dislikes for single track
//GET /api/
router.get('/', async (req, res, next) => {
    try {
        const likes = await Dislike.findAll({
            include: [Artist, { model: Track }]
        })
        res.json(likes)
    } catch (err) { next(err) }
})


//GET dislikes for single album (sum dislikes of all the tracks)
//GET /api/
router.get('/:artistId', async (req, res, next) => {
    try {
        const dislikesByArtist = await Dislike.findAll({ where: { artistId: req.params.artistId } }, {
            include: [Artist, { model: Track }]
        })
        res.json(dislikesByArtist)
    } catch (err) { next(err) }
})

module.exports = router
