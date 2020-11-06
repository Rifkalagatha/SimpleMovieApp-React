import React, { useState, useEffect } from 'react'
import MovieContainer from '../components/movieContainer'
import { useSelector, useDispatch } from 'react-redux'
import { changeSearch, getMovies } from '../store/action'
import { Table } from 'react-bootstrap'

function Home() {
    const movies = useSelector(state => state.movies.data)
    const search = useSelector(state => state.search.data)
    const loading = useSelector(state => state.movies.loading)
    const error = useSelector(state => state.movies.error)
    const [temp, setTemp] = useState('')
    const dispatch = useDispatch()

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

    if (loading) return <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
    </div>
    if (error) return <p>Error....</p>

    return (
        <>
            <form className='container mt-5 d-flex' onSubmit={handleSearch}>
                <input className='form-control'
                    type='text'
                    placeholder="Search"
                    aria-label="Search"
                    value={temp}
                    onChange={handleTemp}
                >
                </input>
                <button>search</button>
            </form>
            <Table className="m-5" style={{ width: '90%'}} striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>IMDb ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    {Array.isArray(movies) ? movies.map((movie) => (
                        <MovieContainer 
                        key={movie.id} 
                        movie={movie}
                        ></MovieContainer>
                    )) : <td className="text-center" colSpan="4">Movie Not Found</td> }
            </Table>
        </>
    )

}

export default Home