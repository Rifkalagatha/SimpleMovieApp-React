import {
    SET_MOVIE_DETAIL,
    SET_LOADING,
    SET_ERROR
} from '../action-types'

const initialState = {
    data: {},
    loading: true,
    error: null,
}

export default function search (state = initialState, action) {
    if (action.type === SET_MOVIE_DETAIL) {
        return {
            ...state,
            data: action.payload
        }
    }
    if (action.type === SET_LOADING) {
        return {
            ...state,
            loading: action.payload
        }
    }
    if (action.type === SET_ERROR) {
        return {
            ...state,
            error: action.payload
        }
    }
    return state
}