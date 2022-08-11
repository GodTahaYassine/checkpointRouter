import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <input style={{color:"#FF87B2" ,marginRight:'8px'}} type="text" onChange={(e)=>props.handleFilter(e.target.value)} placeholder="Search for movie"></input>
        </div>
    )
}

export default Filter
