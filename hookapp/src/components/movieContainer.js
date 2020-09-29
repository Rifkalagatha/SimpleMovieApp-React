import React from 'react'

function MovieContainer(props) {

    return (
        <div class="container d-inline-flex p-2 mt-5 col-4">
            <div class="shadow-lg card" style={{ width: '18rem', height: '37rem' }}>
                <img src={props.movie.Poster} class="card-img-top" alt="" />
                <div class="card-body">
                    <h5 class="card-title">{props.movie.Title}</h5>
                    <p class="card-text text-muted">Year : {props.movie.Year}.</p>
                    <p class="card-text text-muted">Type : {props.movie.Type}.</p>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer