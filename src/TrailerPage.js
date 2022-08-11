import React from 'react'
import MovieCard from './MovieCard'
import { useParams } from 'react-router-dom'
const TrailerPage = ({list}) => {
    const {params} = useParams()
    const movie=list.find((elm) => elm.id === +params)
    console.log(movie)
    return (
        <h1>{movie.title}</h1>
    )
}

export default TrailerPage
