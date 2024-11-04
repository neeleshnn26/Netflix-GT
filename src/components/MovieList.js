import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-semibold ml-5 mb-3 text-slate-300 ">{title}</h1>
      <div className="flex gap-5 ml-5 overflow-x-scroll scrollbar-hide">
        {
            movies?.map((movie)=> <MovieCard key={movie.id}posterPath={movie.poster_path}/>)
        }
       
      </div>
    </div>
  )
}

export default MovieList
