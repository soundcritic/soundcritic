import axios from 'axios'

//ACTION TYPES
const GET_ALL_LIKES = 'GET_ALL_LIKES'

//ACTION CREATORS
export const setAllLikes = likes => ({
  type: GET_ALL_LIKES,
  likes
})

//THUNK CREATORS
export const fetchAllLikes = () => async dispatch => {
  const response = await axios.get('/api/likes')
  const likes = response.data
  dispatch(setAllLikes(likes))
}

let defaultAllLikes = []

//REDUCER
export function allLikes(state = defaultAllLikes, action) {
  switch (action.type) {
    case GET_ALL_LIKES:
      return action.likes
    default:
      return state
  }
}
