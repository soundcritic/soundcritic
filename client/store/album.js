import axios from 'axios'

//ACTION TYPES
const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS'
const GET_ONE_ALBUM = 'GET_ONE_ALBUM'

//ACTION CREATORS
export const setAllAlbums = albums => ({
  type: GET_ALL_ALBUMS,
  albums
})
export const setOneAlbum = album => ({
  type: GET_ONE_ALBUM,
  album
})

//THUNK CREATORS
export const fetchAllAlbums = () => async dispatch => {
  const response = await axios.get('/api/albums')
  const albums = response.data
  dispatch(setAllAlbums(albums))
}

export const fetchOneAlbum = albumId => async dispatch => {
  const response = await axios.get(`/api/albums/${albumId}`)
  const album = response.data
  dispatch(setOneAlbum(album))
}

let defaultAllAlbums = []
let defaultOneAlbum = {}

//REDUCER
export function allAlbums(state = defaultAllAlbums, action) {
  switch (action.type) {
    case GET_ALL_ALBUMS:
      return action.albums
    default:
      return state
  }
}
export function oneTrack(state = defaultOneAlbum, action) {
  switch (action.type) {
    case GET_ONE_ALBUM:
      return action.album
    default:
      return state
  }
}
