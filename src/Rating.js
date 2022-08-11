import React from 'react'

const Rating = (props) => {
    return (
        <div>
            <input style={{color:"#F65A83",marginRight:'8px',marginLeft:'4px'}} type="text" onChange={(e)=>props.handleRating(e.target.value)} placeholder="Filter by Rating"></input>
        </div>
    )
}

export default Rating
