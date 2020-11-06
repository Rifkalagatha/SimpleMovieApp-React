import {
    ADD_FAVORITE,
    DELETE_FAVORITE
} from '../action-types'

const initialState = {
    data: []
}

export default function movies (state = initialState, action) {
    if (action.type === ADD_FAVORITE) {
        return {
            ...state,
            data: state.data.concat(action.payload)
        }
    }

    if (action.type === DELETE_FAVORITE) {
        return {
            ...state,
            data: state.data.filter(item => item !== action.payload),
            lastUpdated: Date.now() 
        }
    }

    return state
}