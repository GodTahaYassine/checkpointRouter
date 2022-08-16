import React, { useState } from 'react'
import "./movieCard.css"
import { Card } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';
const MovieCard = ({movieInfo}) => {
    return (
            <div className="card" style={{ backgroundColor: 'black'}} >  
            <Link style={{textDecoration:'none'}} to={`/TrailerPage/${movieInfo.id}`} >
                <Card.Img variant="top" src={movieInfo.posterURL} style={{ width: '197px',height: '300px' }} />
                <Card.Body >
                    <Card.Title style={{color: 'silver'}}>{movieInfo.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <ReactStars value={movieInfo.rating}/>
                </Card.Footer>
            </Link>
            </div>
    )
}

export default MovieCard
