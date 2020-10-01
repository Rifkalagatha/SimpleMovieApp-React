import React from 'react'
import { useSelector } from 'react-redux'
import FavoriteContainer from '../components/favoriteContainer'

function Favorite() {
    const favorite = useSelector(state => state.favorite.data)
    // console.log(favorite)
    return (
        
        <div class='d-flex justify-content-center mt-5'>
            <div class='card shadow'>
            <div class='card-body'>
            <h5 class="card-title">Your Favorite Movie</h5>
            <ul>
                {(favorite.length > 0) ? favorite.map((data) => (
                <FavoriteContainer key={data.id} data={data} />
                )): <p class='text-center'>Silahkan Tambahkan Movie Terlebih dahulu</p>
            }
            </ul>

            </div>
            
        
        </div>

        </div>
        

    )
}

export default Favorite