import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    <div className="bg-black pb-3 w-screen">
      <div className="-mt-52 relative z-20 w-screen ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
     <MovieList title={"Top rated"} movies={movies.topRatedMovies}/>
     <MovieList title={"Popular"} movies={movies.popularMovies}/>
     <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer
