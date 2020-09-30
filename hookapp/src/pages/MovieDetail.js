import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function MovieDetail(props) {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        setLoading(true)
        fetch('http://www.omdbapi.com/?apikey=2477839d&i=' + id)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error..</p>

    return (
        <div class=' d-flex justify-content-center mt-5'>
            <img src={movie.Poster} alt="..." class="img-thumbnail"></img>
            <div class="card " style={{ width: "40rem" }}>

                <div class="card-body">
                    <h5 class="card-title text-center">{movie.Title}</h5>
                    <p class="card-text text-muted text-center">{movie.Year}</p><br />
                    <span class="card-text">Released : {movie.Released}</span><br />
                    <span class="card-text">Runtime  : {movie.Runtime}</span><br />
                    <span class="card-text">Genre  : {movie.Genre}</span><br />
                    <span class="card-text">Director  : {movie.Director}</span><br />
                    <span class="card-text">Writer  : {movie.Writer}</span><br />
                    <span class="card-text">Actors  : {movie.Actors}</span><br />
                    <span class="card-text">Country  : {movie.Country}</span><br />
                    <span class="card-text">Awards  : {movie.Awards}</span><br />
                    <span class="card-text">Rating  : {movie.imdbRating}</span><br />
                </div>
            </div>
        </div>
    )
}

export default MovieDetail