import { combineReducers } from 'redux'
import movies from './movies'
import favorite from './favorite'
import search from './search'
import movieDetail from './movieDetail'

export default combineReducers({
    movies,
    favorite,
    search,
    movieDetail
})