import axios from 'axios'

//ACTION TYPES
const GET_ONE_ARTIST = 'GET_ONE_ARTIST'

//ACTION CREATORS
export const setOneArtist = artist => ({
  type: GET_ONE_ARTIST,
  artist
})

//THUNK CREATORS
export const fetchOneArtist = artistId => async dispatch => {
  const response = await axios.get(`/api/artists/${artistId}`)
  const artist = response.data
  dispatch(setOneArtist(artist))
}

let defaultOneArtist = {}

//REDUCER
export function oneArtist(state = defaultOneArtist, action) {
  switch (action.type) {
    case GET_ONE_ARTIST:
      return action.artist
    default:
      return state
  }
}
