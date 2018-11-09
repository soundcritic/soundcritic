'use strict'
const fs = require('fs')
const db = require('../server/db/')
const {
  Album,
  Artist,
  Track,
  Like,
  Dislike,
  Slider
} = require('../server/db/models')
const {likeLatLong} = require('../seedData/likes')
const {dislikeLatLong} = require('../seedData/dislikes')
const likes = require('../seedData/likes')
const dislikes = require('../seedData/dislikes')
const tracks = JSON.parse(fs.readFileSync('./seedData/tracks.json', 'utf8'))
//const albums = JSON.parse(fs.readFileSync('./seedData/albums.json', 'utf8'))
// const artists = JSON.parse(fs.readFileSync('./seedData/tracks.json', 'utf8'))

//const albums = require('./albums')

// albums.forEach(album => {
//   console.log('album:', album)
// })



async function genNumDislikesField(createdDislikes) {
for (let i = 0; i < dislikeLatLong.length; i++) {
  const track = await Track.findById(
    Math.ceil(Math.random() * Math.floor(44))
  )
  const artist = await Artist.findById(track.artistId)

  await track.addDislike(createdDislikes[i])
  let newNumDislikes = track.dataValues.numDislikes
  newNumDislikes++
    await Track.update(
      {numDislikes: newNumDislikes},
      {
        where: {id: track.id},
        returning: true
      }
    )
    await artist.addDislike(createdDislikes[i])
}
}
async function genNumLikesField(createdLikes) {
for (let i = 0; i < likeLatLong.length; i++) {
  const track = await Track.findById(
    Math.ceil(Math.random() * Math.floor(44))
  )
    const artist = await Artist.findById(track.artistId)

  await track.addLike(createdLikes[i])
  let newNumLikes = track.dataValues.numLikes
  newNumLikes++
    await Track.update(
      {numLikes: newNumLikes},
      {
        where: {id: track.id},
        returning: true
      }
    )
    await artist.addLike(createdLikes[i])

  }
}

async function genRating(createdTracks) {
  console.log(createdTracks.length);
   for (let i = 0; i < createdTracks.length; i++) {
     const track = await Track.findById(i + 1)

    await Track.update(
      {rating:  ((track.numLikes/(track.numLikes+track.numDislikes))*100)},
      {
        where: {id: i + 1},
        returning: true
      }
    )
   }
}

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dexter = await Artist.create({name: 'Dexter Britain'})
  const jets = await Artist.create({name: 'Jets Overhead'})
  const nin = await Artist.create({name: 'Nine Inch Nails'})

  const ccv2 = await Album.create({
    title: 'Creative Commons Volume 2',
    artistId: dexter.id,
    artworkPath:
      'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/creative_commons_vol_2.jpeg'
  })
  const zenith = await Album.create({
    title: 'Zenith',
    artistId: dexter.id,
    artworkPath:
      'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/zenith.jpeg'
  })
  const noNations = await Album.create({
    title: 'No Nations (Instrumentals)',
    artistId: jets.id,
    artworkPath:
      'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/no_nations.jpeg'
  })
  const ghosts = await Album.create({
    title: 'Ghosts I-IV',
    artistId: nin.id,
    artworkPath:
      'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/ghosts_i-iv.jpeg'
  })
  const theSlip = await Album.create({
    title: 'The Slip',
    artistId: nin.id,
    artworkPath:
      'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/the_slip.jpeg'
  })

  const artists = {
    'Dexter Britain': dexter,
    'Nine Inch Nails': nin,
    'Jets Overhead': jets
  }

  const albums = {
    'Creative Commons Volume 2': ccv2,
    Zenith: zenith,
    'No Nations (Instrumentals)': noNations,
    'Ghosts I-IV': ghosts,
    'The Slip': theSlip
  }

  //let createdAlbums = {}

  // await Promise.all(
  //   albums.map(album => {
  //     const createdAlbum = Album.create({
  //       title: album.title,
  //       artistId: album.artistid,
  //       artworkPath: album.artworkPath
  //     })
  //     console.log('createdAlbum:', createdAlbum.id)
  //     createdAlbums.push(createdAlbum)
  //   })
  // )

  // for (let i = 0; i < albums.length; i++) {
  //   const album = albums[i]
  //   const createdAlbum = await Album.create({
  //     title: album.title,
  //     artistId: album.artistId,
  //     artworkPath: album.artworkPath
  //   })
  //   console.log('createdAlbum:', createdAlbum)//createdAlbum.id, createdAlbum.title)
  //   createdAlbums[createdAlbum.title] = createdAlbum
  // }
  // await Promise.all(
  //   albums.map(album => {
  //     const createdAlbum = Album.create({
  //       title: album.title,
  //       artistId: album.artistid,
  //       artworkPath: album.artworkPath
  //     })
  //     console.log('createdAlbum:', createdAlbum.id)
  //     createdAlbums.push(createdAlbum)
  //   })
  // )
  let createdTracks = []

  await Promise.all(
    tracks.map(track => {
      //console.log('track.album', track.album, 'createdAlbums[track.album]', createdAlbums[track.album])
      const createdTrack = Track.create({
        title: track.title,
        audioPath: track.audioPath,
        albumId: albums[track.album].id,
        artistId: artists[track.artist].id,
        genre: track.genre,
        numLikes: 0,
        numDislikes: 0,
        rating: 0
      })
      createdTracks.push(createdTrack)
      return createdTrack
    })
  )
  let createdLikes = []
  for (let i = 0; i < likeLatLong.length; i++) {
    let newLike = await Like.create({
      latlong: likeLatLong[i]
    })
    createdLikes.push(newLike)
  }

  let createdDislikes = []
  for (let i = 0; i < dislikeLatLong.length; i++) {
    let newDislike = await Dislike.create({
      latlong: dislikeLatLong[i]
    })
    createdDislikes.push(newDislike)
  }

    await genNumLikesField(createdLikes)
    await genNumDislikesField(createdDislikes)
    await genRating(createdTracks)

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
