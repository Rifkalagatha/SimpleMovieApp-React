import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'

// import {
//     ADD_FAVORITE,
//     CHANGE_SEARCH,
//     SET_MOVIE,
//     SET_MOVIE_DETAIL,
//     SET_LOADING,
//     SET_ERROR
// } from './action-types'

// const initialState = {
//     movies: {},
//     search: 'harry potter',
//     loading: true,
//     error: null,
//     favorite: [],
//     movieDetail: {}
// }

// function reducer(state = initialState, action) {
//     if (action.type === ADD_FAVORITE) {
//         return {
//             ...state,
//             favorite: state.favorite.concat(action.payload)
//         }
//     }
//     if (action.type === CHANGE_SEARCH) {
//         return {
//             ...state,
//             search: action.payload
//         }
//     }
//     if (action.type === SET_MOVIE) {
//         return {
//             ...state,
//             movies: action.payload
//         }
//     }
//     if (action.type === SET_MOVIE_DETAIL) {
//         return {
//             ...state,
//             movieDetail: action.payload
//         }
//     }
//     if (action.type === SET_LOADING) {
//         return {
//             ...state,
//             loading: action.payload
//         }
//     }
//     if (action.type === SET_ERROR) {
//         return {
//             ...state,
//             error: action.payload
//         }
//     }
//     return state;
// }

const store = createStore(reducer, applyMiddleware(thunk))






export default store