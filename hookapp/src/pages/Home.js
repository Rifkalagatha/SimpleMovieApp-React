import React, { useState, useEffect } from 'react'
import MovieContainer from '../components/movieContainer'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearch, getMovies } from '../store/action'





function Home() {
    // const name = useSelector(state => state.name)
    const data = useSelector(state => state)
    const movies = useSelector(state => state.movies.data)
    const search = useSelector(state => state.search.data)
    const loading = useSelector(state => state.movies.loading)
    const error = useSelector(state => state.movies.error)
    const [temp, setTemp] = useState('')
    const dispatch = useDispatch()

    console.log(movies, 'ini movie')
    console.log(search)
    console.log(data, 'ini data')

    
    useEffect(() => {
        dispatch(getMovies(search))
    }, [search])

    const handleTemp = (event) => {
        setTemp(event.target.value)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        dispatch(changeSearch(temp))
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error....</p>

    return (
        <div>
            
            <form class='container mt-5 d-flex' onSubmit={handleSearch}>
                <input class='form-control'
                    type='text'
                    placeholder="Search"
                    aria-label="Search"
                    value={temp}
                    onChange={handleTemp}
                >
                </input>
                <button>search</button>
            </form>
            <ul>
                {Array.isArray(movies) ? movies.map((movie) => (
                    <MovieContainer key={movie.id} movie={movie}></MovieContainer>
                )) : <h1 class='mt-5 text-center'>Data tidak ditemukan</h1>}
            </ul>
        </div>
    )

}

export default Home