import React, { Component } from 'react'
import axios from 'axios'




class MovieList extends Component {

  printMovies = (val) => {
    if (val.length !== 0) {
      return (
      val.map((Search, index) => {
        console.log("val mapping", Search)
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

  render() {
    return (
      <div className='movie_wrapper'>
        {this.printMovies(this.props.movies)}
      </div>
    )
  }
}


export default MovieList