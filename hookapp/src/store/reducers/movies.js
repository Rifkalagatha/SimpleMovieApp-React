import {
    SET_MOVIE,
    SET_LOADING,
    SET_ERROR
} from '../action-types'

const initialState = {
    data: {},
    loading: true,
    error: null,
}

export default function movies (state = initialState, action) {
    if (action.type === SET_MOVIE) {
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