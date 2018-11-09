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
export const fetchAllDislikes = () => async dispatch => {
  const response = await axios.get('/api/dislikes')
  const dislikes = response.data
  dispatch(setAllDislikes(dislikes))
}
export const postDislike = dislike => {
  return async dispatch => {
    const response = await axios.post('/api/dislikes', dislike)
    const newDislike = response.data
    dispatch(addDislike(newDislike))
  }
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
