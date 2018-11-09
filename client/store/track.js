import axios from 'axios'

//ACTION TYPES
const GET_ALL_TRACKS = 'GET_ALL_TRACKS'
const SET_ONE_TRACK = 'GET_ONE_TRACK'

//ACTION CREATORS
export const setAllTracks = tracks => ({
  type: GET_ALL_TRACKS,
  tracks
})
export const setOneTrack = track => ({
  type: SET_ONE_TRACK,
  track
})

//THUNK CREATORS
export const fetchAllTracks = () => async dispatch => {
  const response = await axios.get('/api/tracks')
  const tracks = response.data
  dispatch(setAllTracks(tracks))
}

export const fetchOneTrack = trackId => async dispatch => {
  const response = await axios.get(`/api/tracks/${trackId}`)
  const track = response.data
  dispatch(setOneTrack(track))
}

export const fetchOneTrackSelector = (numOfTracks) => async dispatch => {
  const randomNumber = Math.ceil(Math.random() * Math.floor(numOfTracks))
  const testNumber = Math.ceil(Math.random() * Math.floor(100))

  const response = await axios.get(`/api/tracks/${randomNumber}`)
  const track = response.data
  console.log(track);
  if (track.rating >= testNumber) {
    dispatch(setOneTrack(track))
  } else {
    fetchOneTrackSelector(numOfTracks)
  }

}

let defaultAllTracks = []
let defaultOneTrack = {}

//REDUCER
export function allTracks(state = defaultAllTracks, action) {
  switch (action.type) {
    case GET_ALL_TRACKS:
      return action.tracks
    default:
      return state
  }
}

export function oneTrack(state = defaultOneTrack, action) {
  switch (action.type) {
    case SET_ONE_TRACK:
      return action.track
    default:
      return state
  }
}
