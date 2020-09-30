import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Home,
  About,
  MovieDetail
} from './pages'



function App() {
  const [movies, setMovies] = useState({})
  const [search, setSearch] = useState('')
  const [temp, setTemp] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search) {
      setLoading(true)
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
      setLoading(true)
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

  const handleUrl = (event) => {
    console.log('masuk')
  }

  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path='/'>
          <Home handleUrl={handleUrl} handleSearch={handleSearch} handleTemp={handleTemp} temp={temp} movies={movies}/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/Movie/:id'>
          <MovieDetail/>
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <Navbar/>
    //   <form class ='container mt-5 '  onSubmit={handleSearch}>
    //     <input
    //     type='text'
    //     value={temp}
    //     onChange={handleTemp}
    //     >
    //     </input>
    //     <button>search</button>
    //   </form>
    //   <ul>

    //     {Array.isArray(movies) ? movies.map((movie) => (
    //       <MovieContainer key={movie.id} movie={movie}></MovieContainer>
    //     )): <h1 class='mt-5 text-center'>Data tidak ditemukan</h1>}
    //   </ul>
    // </div>

  )
}

export default App;
