import React from 'react'
import MovieCard from './MovieCard'
const MovieList = (props) => {
    return (
        <div style={{display: 'flex' ,justifyContent: 'center',margin:'100px 0 auto' ,flexWrap: 'wrap'}}>
            {props.list.length ?props.list.map(elm => <MovieCard movieInfo={elm}/>) :<span>No Matches Found</span>}
        
        </div>
    )
}

export default MovieList
