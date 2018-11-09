import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import {artist} from './artist'
import {allAlbums, oneAlbum} from './album'
import {allTracks, oneTrack} from './track'
import like from './like'
import dislike from './dislike'

const reducer = combineReducers({user, artist, allAlbums, oneAlbum, allTracks, oneTrack, like, dislike})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './artist'
export * from './album'
export * from './track'
export * from './like'
export * from './dislike'
