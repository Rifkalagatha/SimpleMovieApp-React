import React, { useState } from 'react'
import { Modal, Button, Toast } from 'react-bootstrap'
import { setError, setLoading,  addFavorite } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

function MovieContainer(props) {
    const dispatch = useDispatch()
    const [showToast, setShowToast] = useState(false)
    const [showToastFailed, setShowToastFailed] = useState(false)
    const [show, setShow] = useState(false);
    const [Movie, setMovie] = useState({});
    const favorite = useSelector(state => state.favorite.data)


    const AddFavorite = (payload) => {
        let counter = false
        for (let i = 0; i < favorite.length; i++) {
            if (favorite[i] === payload) {
                counter = true   
            } else {
                counter = false
            }
        }
        if(counter){
            setShowToastFailed(true)
        } else {
            setShowToast(true)
            dispatch(addFavorite(payload))
        }
    }


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

    return (

        <>
            <tr>
                <td id="title" onClick={() => handleShow(props.movie.imdbID)}>{props.movie.Title}</td>
                <td>{props.movie.Year}</td>
                <td>{props.movie.imdbID}</td>
                <td>
                    <i onClick={() => AddFavorite(props.movie)} class="far fa-star"></i>
                </td>
            </tr>

            {/* ModalBootsrap */}
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

            {/* Toast Bootstrap */}
            <Toast 
             onClose={() => setShowToast(false)} 
             show={showToast} 
             delay={4000} autohide 
             className="rounded fixed-top m-2 ">
                <Toast.Header>
                    <strong className="mr-auto">Success</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body className="text-success">added to favorites!</Toast.Body>
            </Toast>
            <Toast 
             onClose={() => setShowToastFailed(false)} 
             show={showToastFailed} 
             delay={4000} autohide 
             className="rounded fixed-top m-2 ">
                <Toast.Header>
                    <strong className="mr-auto">Failed</strong>
                    <small>just now</small>
                </Toast.Header>
                <Toast.Body className="text-danger">the movie is already in the favorite list</Toast.Body>
            </Toast>
        </>
    
    )
}

export default MovieContainer