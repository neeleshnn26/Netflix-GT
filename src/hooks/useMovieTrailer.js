import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch=useDispatch()
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo)
    useEffect(()=>{
    !trailerVideo && getMovieVideos()
    },[])
    
      const getMovieVideos=async()=>{
         const data = await fetch("https://api.themoviedb.org/3/movie/" +movieId+"/videos?language=en-US", API_OPTIONS)
         const json= await data.json()
         const videos=json.results.filter((v)=>v.type==="Trailer"
         )
         const trailer=videos.length ? videos[0] : json.results[0]
        dispatch(addTrailerVideo(trailer))
      }
}

export default useMovieTrailer
