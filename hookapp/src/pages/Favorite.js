import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import FavoriteContainer from '../components/favoriteContainer'
import { Table } from 'react-bootstrap'

function Favorite() {
    const statefavorite = useSelector(state => state.favorite.data)
    const [MyFav, setMyFav] = useState([])

    useEffect(() => {
        setMyFav(statefavorite)
        console.log('masuk eff favorite')
    }, [statefavorite])

    return (
        <div class='d-flex justify-content-center mt-5'>
            <div class='card shadow'>
            <div class='card-body'>
            <h5 class="card-title">Your Favorite Movie</h5>
            <Table style={{ width: '100%'}} striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Type</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {(MyFav.length > 0) ? MyFav.map((data, index) => (
                <FavoriteContainer key={index} data={data} />
                )): <td className="text-center" colSpan="4">add favorites</td>
            }
            </Table>
            </div>
        </div>
        </div>
        

    )
}

export default Favorite