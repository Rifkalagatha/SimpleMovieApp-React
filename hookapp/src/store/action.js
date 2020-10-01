import {
    ADD_FAVORITE,
    CHANGE_SEARCH,
    SET_MOVIE,
    SET_MOVIE_DETAIL,
    SET_LOADING,
    SET_ERROR
} from './action-types'

export function addFavorite(payload) {
    return {
        type: ADD_FAVORITE,
        payload
    }
}

export function changeSearch(payload) {
    return {
        type: CHANGE_SEARCH,
        payload
    }
}

export function setMovie(payload) {
    return {
        type: SET_MOVIE,
        payload
    }
}

export function getMovies(payload) {
    return (dispatch) => {
        dispatch(setLoading(true))
        fetch('http://www.omdbapi.com/?apikey=2477839d&s=' + payload)
            .then((res) => res.json())
            .then((data) => {
                dispatch(setMovie(data.Search))
            })
            .catch((err) => {
                dispatch(setError(err))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export function setMovieDetail(payload) {
    return {
        type: SET_MOVIE_DETAIL,
        payload
    }
}

export function getMovieDetail(payload) {

    return (dispatch) => {
        dispatch(setLoading(true))
        fetch('http://www.omdbapi.com/?apikey=2477839d&i=' + payload)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                dispatch(setMovieDetail(data))
            })
            .catch((err) => {
                dispatch(setError(err))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export function setLoading(payload) {
    return {
        type: SET_LOADING,
        payload
    }
}

export function setError(payload) {
    return {
        type: SET_ERROR,
        payload
    }
}