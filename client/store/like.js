import axios from 'axios'

//ACTION TYPES
const GET_ALL_LIKES = 'GET_ALL_LIKES'
const ADD_LIKE = 'ADD_LIKE'

const GET_ARTIST_LIKES = 'GET_ARTIST_LIKES'

//ACTION CREATORS
export const setAllLikes = likes => ({
  type: GET_ALL_LIKES,
  likes
})
export const addLike = like => ({
  type: ADD_LIKE,
  like
})

export const artistLikes = likes => ({
  type: GET_ARTIST_LIKES,
  likes
})

//THUNK CREATORS
export const postLike = data => {
  return async dispatch => {
    const response = await axios.post('/api/likes', data)
    const newLike = response.data
    dispatch(addLike(newLike))
  }
}
export const fetchAllLikes = () => async dispatch => {
  const response = await axios.get('/api/likes')
  const likes = response.data
  dispatch(setAllLikes(likes))
}
export const getTrackLikes = id => async dispatch => {
  const {data} = await axios.get(`/api/likes/track/${id}`)
  dispatch(setAllLikes(data))
}

export const getAlbumLikes = id => async dispatch => {
  const {data} = await axios.get(`/api/likes/album/${id}`)
  dispatch(setAllLikes(data))
}

export const getArtistLikes = id => async dispatch => {
  const {data} = await axios.get(`/api/likes/artist/${id}`)
  dispatch(setAllLikes(data))
}

let defaultAllLikes = []

//REDUCER
export function allLikes(state = defaultAllLikes, action) {
  switch (action.type) {
    case GET_ALL_LIKES:
      return action.likes
    case ADD_LIKE:
      return [...state, action.like]
    default:
      return state
  }
}
