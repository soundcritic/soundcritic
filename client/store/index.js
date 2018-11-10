import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import { oneArtist } from './artist'
import { allAlbums, oneAlbum } from './album'
import { allTracks, oneTrack } from './track'
import { allLikes } from './like'
import { allDislikes } from './dislike'

const reducer = combineReducers({ user, oneArtist, allAlbums, oneAlbum, allTracks, oneTrack, allLikes, allDislikes })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './artist'
export * from './album'
export * from './track'
export * from './like'
export * from './dislike'
