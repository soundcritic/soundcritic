import axios from 'axios'

//ACTION TYPES
const GET_ALL_DISLIKES = 'GET_ALL_DISLIKES'
const ADD_DISLIKE = 'ADD_DISLIKE'

//ACTION CREATORS
export const setAllDislikes = dislikes => ({
  type: GET_ALL_DISLIKES,
  dislikes
})
export const addDislike = dislike => ({
  type: ADD_DISLIKE,
  dislike
})

//THUNK CREATORS
export const postDislike = data => {
  return async dispatch => {
    const response = await axios.post('/api/dislikes', data)
    const newDislike = response.data
    dispatch(addDislike(newDislike))
  }
}
export const fetchAllDislikes = () => async dispatch => {
  const {data} = await axios.get('/api/dislikes')
  dispatch(setAllDislikes(data))
}
export const getTrackDislikes = id => async dispatch => {
  const {data} = await axios.get(`/api/dislikes/track/${id}`)
  dispatch(setAllDislikes(data))
}

export const getAlbumDislikes = id => async dispatch => {
  const {data} = await axios.get(`/api/dislikes/album/${id}`)
  dispatch(setAllDislikes(data))
}

export const getArtistDislikes = id => async dispatch => {
  const {data} = await axios.get(`/api/dislikes/artist/${id}`)
  dispatch(setAllDislikes(data))
}


let defaultAllDislikes = []

//REDUCER
export function allDislikes(state = defaultAllDislikes, action) {
  switch (action.type) {
    case GET_ALL_DISLIKES:
      return action.dislikes
    case ADD_DISLIKE:
      return action.dislike
    default:
      return state
  }
}
