import React from 'react'
import {
    Link
  } from 'react-router-dom'

function Navbar() {
    return (
        <div class ='m-2 shadow-lg '>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img src="https://i2.wp.com/d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/16161919/hacktiv8.png?fit=300%2C300&ssl=1" width="50" height="40" class="d-inline-block align-top" alt="logo"/>
                <a class="navbar-brand ml-2">  MoviesApp  </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to='/'>Home</Link>
                        </li>  
                        <li class="nav-item active">
                            <Link class="nav-link" to='/favorite'>Favorite</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

