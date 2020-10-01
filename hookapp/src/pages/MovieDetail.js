import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { addFavorite, getMovieDetail } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

function MovieDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const moviesDetail = useSelector(state => state.movieDetail)
    const favorite = useSelector(state => state.favorite)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)


    useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [id])

    // if (loading) return <p>Loading...</p>
    // if (error) return <p>Error..</p>

    const handleFavorite = (event) => {
        let result = false;
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] === event) {
                result = true
            }
        }
        if (result === true) {
            alert('Movie ini sudah di favoritekan sebelumnnya')
        } else {
            dispatch(addFavorite(event))
        }
        
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error....</p>

    return (
        <div class=' d-flex justify-content-center mt-5'>
            <img src={moviesDetail.Poster} alt="..." class="img-thumbnail"></img>
            <div class="card " style={{ width: "40rem" }}>

                <div class="card-body">
                    <h5 class="card-title text-center">{moviesDetail.Title}</h5>
                    <p class="card-text text-muted text-center">{moviesDetail.Year}</p><br />
                    <span class="card-text">Released : {moviesDetail.Released}</span><br />
                    <span class="card-text">Runtime  : {moviesDetail.Runtime}</span><br />
                    <span class="card-text">Genre  : {moviesDetail.Genre}</span><br />
                    <span class="card-text">Director  : {moviesDetail.Director}</span><br />
                    <span class="card-text">Writer  : {moviesDetail.Writer}</span><br />
                    <span class="card-text">Actors  : {moviesDetail.Actors}</span><br />
                    <span class="card-text">Country  : {moviesDetail.Country}</span><br />
                    <span class="card-text">Awards  : {moviesDetail.Awards}</span><br />
                    <span class="card-text">Rating  : {moviesDetail.imdbRating}</span><br />

                </div>
                <button onClick={() => handleFavorite(`${moviesDetail.Title}`)}>add favorite</button>
            </div>
        </div>
    )
}

export default MovieDetail