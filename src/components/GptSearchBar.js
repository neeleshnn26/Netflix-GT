import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector ,useDispatch } from 'react-redux'
import { genAI } from '../utils/geminiAi'
import { API_OPTIONS } from '../utils/constants'
import {addGptMovieResult} from '../utils/gptSlice'

const GptSearchBar = () => {

    const language=useSelector((store)=>store.lang?.language)
    const searchText=useRef(null)
    const dispatch=useDispatch()

    //Search movie in TMDB
    const searchMovieTMDB=async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        return json.results
    }

    const handleGptSearchClick=async ()=>{
  
      const prompt="act as a movie recomemdation system and suggest some good movies for the query :" + searchText.current.value + ".only give me names of 5 movies with comma seperated like the example result given ahead.Example:sholay,don,kal ho na ho, golmal, dhol"

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      if(!result.response){
        //TODO : Write error on another component or whatever you want to do 
      }
      // console.log(result.response.text());
      const gptMovies=result.response.text().split(",") // split will convert this string into an array 
      console.log(gptMovies)

      const promiseArray  = gptMovies.map((movie)=>searchMovieTMDB(movie))

      const tmdbResults= await Promise.all(promiseArray)
      console.log(tmdbResults)
      dispatch(addGptMovieResult({movieNames:gptMovies, movieResults:tmdbResults}))
    }
  return (
    <div className="absolute ml-96">
      <form onSubmit={(e)=>e.preventDefault()}
       className=" flex justify-center pt-36 text-black">
       <input 
       ref={searchText}
       className=" px-4 py-3  text-black  rounded-md border-2 border-black text-lg bg-white w-[500px]"
       type="text" placeholder={lang[language]?.placeholder}
       onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();  // Prevents form submission
          handleGptSearchClick();
        }
      }}
       
       />
       <button className=" rounded-md border-2 border-black py-3 px-5 ml-3 font-semibold bg-red-700"
            onClick={handleGptSearchClick}
       >{lang[language]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar

