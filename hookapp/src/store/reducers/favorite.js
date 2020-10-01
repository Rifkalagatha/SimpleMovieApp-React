import {
    ADD_FAVORITE,
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
    return state
}