import React from 'react'
import {
    Link
  } from 'react-router-dom'

function Navbar() {
    return (
        <div className =' shadow-lg m-2'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src="https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/16161919/hacktiv8.png?fit=300%2C300&ssl=1" width="50" height="40" className="d-inline-block align-top" alt="logo"/>
                <span className="navbar-brand ml-2">  MoviesApp  </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>  
                        <li className="nav-item active">
                            <Link className="nav-link" to='/favorite'>Favorite</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

