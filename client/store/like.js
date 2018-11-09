import axios from 'axios'

//ACTION TYPES
const GET_ALL_LIKES = 'GET_ALL_LIKES'
const ADD_LIKE = 'ADD_LIKE'


//ACTION CREATORS
export const setAllLikes = likes => ({
  type: GET_ALL_LIKES,
  likes
})
export const addLike = like => ({
  type: ADD_LIKE,
  like
})

//THUNK CREATORS
export const fetchAllLikes = () => async dispatch => {
  const response = await axios.get('/api/likes')
  const likes = response.data
  dispatch(setAllLikes(likes))
}
export const postLike = data => {
  return async dispatch => {
    const response = await axios.post('/api/likes', data)
    const newLike = response.data
    //dispatch(addLike(newLike))
  }
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
