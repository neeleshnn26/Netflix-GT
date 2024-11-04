import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  const gptSearch=useSelector(store=>store.gpt.gptSearch)
useNowPlayingMovies()
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()

  return (
    <div className=" w-screen">
      <Header/>
      {
        gptSearch ?  <GptSearch/> : 
        <>
         <MainContainer/>
        <SecondaryContainer/>
        </>
       
      }
     
      
      {/*

      MainContainer
         - VideoBackground
         - VideoTitle
      SecondaryContainer
         - MovieLists * n
          -cards * n 
      
      */}
    </div>
  )
}

export default Browse
