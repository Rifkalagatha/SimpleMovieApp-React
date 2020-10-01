import React from 'react'
import {useHistory} from 'react-router-dom'



function MovieContainer(props) {
    const history = useHistory()

    function buttonOnClick(id) {
        history.push(`/movie/${id}`)
        // console.log(id)
    }
    

    return (
        <div  class=" container d-inline-flex p-2 mt-5 col-2">
            <div  class="shadow-lg card" style={{ width: '10rem', height: '25rem' }}>
                <img src={props.movie.Poster} class="card-img-top" alt="" style={{ width: '100%', height: '15rem' }}/>
                <div class="card-body">
                    <h6 class="card-title">{props.movie.Title}</h6>
                    <button onClick={() => buttonOnClick(props.movie.imdbID)} class="btn btn-primary" style={{ width: '7rem'}}>Detail</button>
                </div>
            </div>
        </div>
    )
}

export default MovieContainer