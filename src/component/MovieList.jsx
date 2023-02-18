import React from 'react'
import axios from 'axios'

// const inSearch = async (entry) => {
//   const response = await axios.get(
//     `http://www.omdbapi.com/?i=${entry}&apikey=cf8b3ae3`
//   )
//   console.log("hey", response.data)
//   return response.data
// }

const printMovies = (val) => {
  console.log("length", val.length)
  if (val.length !== 0) {
    return (
    val.map((Search, index) => {
      console.log("val mapping", Search)
      // console.log(Search,index);
      return (
        <div className="movie_card" key={index}>
            <img src={`http://image.tmdb.org/t/p/w500/${Search.poster_path}`} alt={Search.title + 'Poster'} />
            <p className='title'>{Search.title}</p>
            <p className='date'>{Search.release_date}</p>
            <p className='Genre'>{Search.Genre}</p>
            <p className='overview'>{Search.overview}</p>

        </div>
        )
    }))
  }
  return <p>Type in a movie</p>
}


function MovieList(props) {
  

  console.log("movies 2", props.movies)
    return (
      <div className='movie_wrapper'>
        {printMovies(props.movies)}
      </div>
    )
  
}

export default MovieList