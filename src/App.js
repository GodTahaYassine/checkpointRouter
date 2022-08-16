import './App.css';
import { useState } from 'react';
import MovieList from './MovieList'
import Filter from './Filter'
import AddMovie from './AddMovie'
import Rating from './Rating';
import logo from './logo.png'
import About from './About.js'
import TrailerPage from './TrailerPage.js';
import {Route , Routes , Link} from 'react-router-dom';
const App =()=>{
  const [filter,setFilter]=useState("")
  const [rating,setRating]=useState("")
  const [movie,setMovie]=useState([
    {
      id:1,
      title:"Catch Me If You Can",
      description:"Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl becomes obsessed with tracking down the con man, who only revels in the pursuit.",
      posterURL:"https://m.media-amazon.com/images/I/81V+b69u3xL._SY445_.jpg",
      trailerURL:'7pyIxz8Qg',
      rating:"4"
    },
    {
      id:2,
      title:"The Dictator" ,
      description: "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
      posterURL:"https://m.media-amazon.com/images/M/MV5BNTlkOWYzZDYtNzQ1MS00YTNkLTkyYTItMjBmNjgyMDBlMjI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_QL75_UX190_CR0,0,190,281_.jpg" ,
      trailerURL:'DS2lURW4JSI',
      rating: "4"
    },
    {
      id:3,
      title:"The Godfather",
      description:"An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      trailerURL:'1x0GpEZnwa8',
      rating:"5"
    }
  ])
    const handleFilter=(val)=>{
      setFilter(val);
    }
    const handleRating=(val)=>{
      setRating(val);
    }
    const handleAddMovie=(val)=>{
      setMovie([...movie,val]);
    }
    return (
      <div>
        <div className="navbar navbar-dark bg-dark" style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-around'}}>
        <div style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-around' ,alignItems: 'flex-end'}}>
        <Link to="/">
          <img src={logo} alt="loading..." />
        </Link>
          <ul style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-between'}}>
            <li>
              <Link to ="/" className="link">Home</Link>
              </li>
            <li>
              <Link to ="/About" className="link">About</Link>
              </li>
          </ul>
        </div>
          <div style={{display: 'flex', flexDirection: 'row' ,justifyContent: 'space-around',alignItems: 'baseline'}}>
            <Filter handleFilter={handleFilter} style={{justifySelf: 'flex-end'}}/>
            <Rating handleRating={handleRating}/>
            <AddMovie handleAddMovie={handleAddMovie} movies={movie}/>
          </div>
        </div>
        <Routes>
          <Route path='/About' element={<About/>}/>
          <Route path="/" element={ <MovieList  list={movie.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase())).filter(elm=>elm.rating.includes(rating))} />} />
          <Route path="/TrailerPage/:id" element={<TrailerPage list={movie}/>} />
        </Routes>
      </div>
    )
  
}
export default App;