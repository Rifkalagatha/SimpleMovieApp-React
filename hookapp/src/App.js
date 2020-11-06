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
  Favorite
} from './pages'
import store from './store/index'



function App() {

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
      </Switch>
    </Router>
    </Provider>
  )
}

export default App;
