import {
    CHANGE_SEARCH,
} from '../action-types'

const initialState = {
    data: 'harry potter'
    
}

export default function search (state = initialState, action) {
    if (action.type === CHANGE_SEARCH) {
        return {
            ...state,
            data: action.payload
        }
    }
    return state
}