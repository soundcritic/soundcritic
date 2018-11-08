'use strict'
const fs = require('fs')
const db = require('../server/db/')
const {Album, Artist, Track, Like, Dislike, Slider} = require('../server/db/models')
const tracks = JSON.parse(fs.readFileSync('./seedData/tracks.json', 'utf8'))
// const albums = JSON.parse(fs.readFileSync('./script/tracks.json', 'utf8'))
// const artists = JSON.parse(fs.readFileSync('./script/tracks.json', 'utf8'))


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const dexter = await Artist.create({name: 'Dexter Britain'})
  const jets = await Artist.create({name: 'Jets Overhead'})
  const nin = await Artist.create({name: 'Nine Inch Nails'})

  const ccv2 = await Album.create({
    name: 'Creative Commons Volume 2',
    artistId: dexter.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/creative_commons_vol_2.jpeg'
  })
  const zenith = await Album.create({
    name: 'Zenith',
    artistId: dexter.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/zenith.jpeg'
  })
  const noNations = await Album.create({
    name: 'No Nations (Instrumentals)',
    artistId: jets.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/no_nations.jpeg'
  })
  const ghosts = await Album.create({
    name: 'Ghosts I-IV',
    artistId: nin.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/ghosts_i-iv.jpeg'
  })
  const theSlip = await Album.create({
    name: 'The Slip',
    artistId: nin.id,
    artworkUrl: 'https://learndotresources.s3.amazonaws.com/workshop/58cff0e769468300041ef9fd/the_slip.jpeg'
  })

  // await Promise.all(albums.map(album => Album.create({
  //   title: album.title,
  //   artistId: artist.id
  // })))

  const artists = {
    'Dexter Britain': dexter,
    'Nine Inch Nails': nin,
    'Jets Overhead': jets
  }

  const albums = {
    'Creative Commons Volume 2': ccv2,
    'Zenith': zenith,
    'No Nations (Instrumentals)': noNations,
    'Ghosts I-IV': ghosts,
    'The Slip': theSlip
  }


  await Promise.all(tracks.map(track => Track.create({
    title: track.title,
    audioUrl: track.audioUrl,
    albumId: albums[track.album].id,
    artistId: artists[track.artist].id,
    genre: track.genre
  })))
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
