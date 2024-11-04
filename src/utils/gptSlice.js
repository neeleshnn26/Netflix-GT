import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
     toggleGptSearchView:(state,action)=>{
       state.gptSearch=!state.gptSearch
     },
     addGptMovieResult:(state,action)=>{
      const{movieNames,movieResults}=action.payload
      state.movieNames=movieNames
      state.movieResults=movieResults
     }
    }
})
export const {toggleGptSearchView,addGptMovieResult}=gptSlice.actions
export default gptSlice.reducer