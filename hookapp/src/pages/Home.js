import React from 'react'
import MovieContainer from '../components/movieContainer'

function Home(props) {

    return (
        <div>
       
            <form class='container mt-5 d-flex' onSubmit={props.handleSearch}>
                <input class='form-control'
                    type='text'
                    placeholder="Search" 
                    aria-label="Search"
                    value={props.temp}
                    onChange={props.handleTemp}
                >
                </input>
                <button>search</button>
            </form>
            <ul>
                {Array.isArray(props.movies) ? props.movies.map((movie) => (
                    <MovieContainer key={movie.id} movie={movie}></MovieContainer>
                )) : <h1 class='mt-5 text-center'>Data tidak ditemukan</h1>}
            </ul>
        </div>
    )

}

export default Home