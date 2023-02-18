import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import SearchInput from './searchInput'
import MovieList from './MovieList'
import '../styles/style.css'


// state = {
//     movies: [],
//     select_val: ""
// }

// let handle_set = ""


const genres = [
  {
    name: 'action',
    genre_code: '28'
  },
  {
    name: 'adventure',
    genre_code: '12'
  },
  {
    name: 'animation',
    genre_code: '16'
  },
  {
    name: 'comedy',
    genre_code: '35'
  },
  {
    name: 'crime',
    genre_code: '80'
  },
  {
    name: 'documentary',
    genre_code: '99'
  },
  {
    name: 'drama',
    genre_code: '18'
  },
  {
    name: 'family',
    genre_code: '10751'
  },
  {
    name: 'fatasy',
    genre_code: '14'
  },
  {
    name: 'history',
    genre_code: '36'
  },
  {
    name: 'horror',
    genre_code: '27'
  },
  {
    name: 'music',
    genre_code: '10402'
  },
  {
    name: 'mystery',
    genre_code: '9648'
  },
  {
    name: 'romance',
    genre_code: '10749'
  },
  {
    name: 'science fiction',
    genre_code: '878'
  },
  {
    name: 'tv movie',
    genre_code: '10770'
  },
  {
    name: 'thriller',
    genre_code: '53'
  },
  {
    name: 'war',
    genre_code: '10752'
  },
  {
    name: 'western',
    genre_code: '37'
  },

]





function Movie() {
  const [movies, setMovies] = useState("");
  const [filteredMovies, setFilteredMovies] = useState("");
  const [select_val, setSelect_val] = useState("");


  const onSearchSubmit = async(entry)=> {
    console.log(entry)
    const query = 'Jack+Reacher'
    const api_key = 'c30084c08a5a044278c3d2d9aa8b8082'
    const response = await axios.get(
        // `http://www.omdbapi.com/?s=${entry}&apikey=cf8b3ae3`
        
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${entry}`
    )
    console.log(response.data.results)
    // this.setState({movies: response.data.results})
    setMovies(response.data.results);
    setFilteredMovies(movies);
}

  const filterMovie = (val) => {
    // console.log("gen find", genres.find(genre => genre.name === select_val).genre_code)
    for (let i = 0; i < val.genre_ids.length; i++) {
      if (val.genre_ids[i] == genres.find(genre => genre.name === select_val).genre_code) {
        return true;
      }
    }
    return false;
  }

  const onSelectChange = (val) => {
    // this.setState({select_val: val})
    setSelect_val(val)
    console.log("selct val111", val)
    console.log("movie length", movies.length)
    if (select_val != "" && movies.length != 0){
      // console.log("im here")
      let movieAmount = movies.filter(filterMovie)
      console.log('number of movies are', movieAmount.length)
      setFilteredMovies(movieAmount)
    }
  } 
  // useEffect (() => {
  //   // setMovies(handle_set)
  // }, [select_val])
  // console.log(genres)

  // const handleSetMovies = (data) => setMovies(data) 
  return (
    <React.Fragment>
    <h1 className="movie_header">Movie App</h1>
    <SearchInput genres={genres} onSelectChange={onSelectChange} onSearchSubmit={onSearchSubmit}/>
    <MovieList sel={select_val} movies={filteredMovies}/>
  </React.Fragment>
  )
}

export default Movie
