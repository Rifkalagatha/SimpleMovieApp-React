import React from 'react';
import Navbar from './components/navbar'
import "./style.css"
import "./spinkit.min.css"
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Home,
  About,
  MovieDetail,
  Favorite
} from './pages'
import store from './store/index'



function App() {

  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(null)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (search) {
  //     setLoading(true)
  //     fetch('http://www.omdbapi.com/?apikey=2477839d&s=' + search)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovies(data.Search)
  //       })
  //       .catch((err) => {
  //         setError(err)
  //       })
  //       .finally(() => {
  //         setLoading(false)
  //       })
  //   } else {
  //     // setLoading(true)
  //     fetch('http://www.omdbapi.com/?apikey=2477839d&s=harry potter')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setMovies(data.Search)
  //       })
  //       .catch((err) => {
  //         setError(err)
  //       })
  //       .finally(() => {
  //         setLoading(false)
  //       })
  //   }
  // }, [search])

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error..</p>


  return (
    <Provider store={store}>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home  />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/favorite'>
          <Favorite />
        </Route>
        <Route path='/Movie/:id'>
          <MovieDetail />
        </Route>
      </Switch>
    </Router>
    </Provider>
    

  )
}

export default App;
