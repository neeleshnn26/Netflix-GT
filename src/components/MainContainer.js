import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null || movies?.length === 0) return null
    
 // or we can write it as if(!movies)return and second case is for undefined
    const mainMovie=movies[0]
    if (!mainMovie) return null
    const{original_title,overview,id}=mainMovie
  return (
    <div className="w-screen">
     <VideoTitle title={original_title} overview={overview}/>
     <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
