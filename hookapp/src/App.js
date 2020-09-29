import React, { useState, useEffect } from 'react';
import MovieContainer from './components/movieContainer'
import Navbar from './components/navbar'



function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState ('')
  const [temp, setTemp] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] =useState(null)

  useEffect(() => {
    if (search) {
      fetch('http://www.omdbapi.com/?apikey=2477839d&s=' + search)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
      fetch('http://www.omdbapi.com/?apikey=2477839d&s=harry potter')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
    }
  }, [search])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error..</p>

  const handleTemp = (event) => {
    setTemp(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(temp)
  }

  return (
    <div>
      <Navbar/>
      <form class ='container mt-5 '  onSubmit={handleSearch}>
        <input
        type='text'
        value={temp}
        onChange={handleTemp}
        >
        </input>
        <button>search</button>
      </form>
      <ul>
        
        {Array.isArray(movies) ? movies.map((movie) => (
          <MovieContainer key={movie.id} movie={movie}></MovieContainer>
        )): <h1 class='mt-5 text-center'>Data tidak ditemukan</h1>}
      </ul>
    </div>

  )
}

export default App;
