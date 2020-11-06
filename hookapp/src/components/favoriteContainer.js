
import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { setError, setLoading, deleteFavorite } from '../store/action'
import { useDispatch} from 'react-redux'

function FavoriteContainer(props) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [Movie, setMovie] = useState({});
    const handleClose = () => setShow(false);


    function handleShow(id) {
        fetch('https://www.omdbapi.com/?apikey=2477839d&i=' + id)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data)
            })
            .catch((err) => {
                dispatch(setError(err))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
        setShow(true)
    }

    function HandleDeleteFavorite(movie) {
        dispatch(deleteFavorite(movie))
    }

    return (
        <>
            <tr>
                <td id="title" onClick={() => handleShow(props.data.imdbID)}>{props.data.Title}</td>
                <td>{props.data.Year}</td>
                <td>{props.data.Type}</td>
                <td><i onClick={() => HandleDeleteFavorite(props.data)} id="delete" class="fas fa-star"></i></td>
            </tr>

            {/* Modal Bootstrap */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Movie Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <img className="img-center" src={Movie.Poster} alt="..."></img>
                    <h4 className="text-center">{Movie.Title}</h4>
                    <p class="card-text text-muted text-center">{Movie.Year}</p><br />
                    <span>Released : {Movie.Released}</span><br />
                    <span>Runtime  : {Movie.Runtime}</span><br />
                    <span>Genre  : {Movie.Genre}</span><br />
                    <span>Director  : {Movie.Director}</span><br />
                    <span>Writer  : {Movie.Writer}</span><br />
                    <span>Actors  : {Movie.Actors}</span><br />
                    <span>Plot  : {Movie.Plot}</span><br />
                    <span>Country  : {Movie.Country}</span><br />
                    <span>Awards  : {Movie.Awards}</span><br />
                    <span>Rating  : {Movie.imdbRating}</span><br />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

           
        </>
    )
}

export default FavoriteContainer