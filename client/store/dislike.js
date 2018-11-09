import axios from 'axios'

//ACTION TYPES
const GET_ALL_DISLIKES = 'GET_ALL_DISLIKES'

//ACTION CREATORS
export const setAllDislikes = dislikes => ({
  type: GET_ALL_DISLIKES,
  dislikes
})

//THUNK CREATORS
export const fetchAllDislikes = () => async dispatch => {
  const response = await axios.get('/api/dislikes')
  const dislikes = response.data
  dispatch(setAllDislikes(dislikes))
}

let defaultAllDislikes = []

//REDUCER
export function allDislikes(state = defaultAllDislikes, action) {
  switch (action.type) {
    case GET_ALL_DISLIKES:
      return action.dislikes
    default:
      return state
  }
}
