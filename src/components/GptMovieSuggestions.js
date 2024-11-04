import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const gpt= useSelector((store)=>store.gpt)
  const{movieResults,movieNames}=gpt
  if(!movieNames)return null;
  return (
    <div className="  text-white ">
     <div className="bg-black bg-opacity-90 pt-56 ">

      {
        movieNames.map((movieName,index)=>( <MovieList key={movieName}title={movieName} movies={movieResults[index]}/>))
      }
     
     </div>
    </div>
  )
}

export default GptMovieSuggestions
