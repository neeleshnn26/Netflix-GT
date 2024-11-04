import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null
  return (
   
      <img 
      className="rounded-md w-44 hover:w-60 transition-all duration-300"
      alt="card"
      src={TMDB_IMG_URL+posterPath}
      />
   
  )
}

export default MovieCard
