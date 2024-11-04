import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 pl-10 absolute w-screen aspect-video bg-gradient-to-r from-black text-white">
      <h1 className="text-6xl font-extrabold">{title}</h1>
      <h1 className="py-6 text-lg w-2/12 text-slate-300">{overview}</h1>
      <div className="flex items-center">
      <button className="mr-3 bg-white px-8 py-3 rounded-md text-xl font-semibold text-black hover:bg-opacity-80"> 
      ▷ Play
      </button>
      <button className="ml-2  bg-gray-400 px-8 py-3 rounded-md text-lg font-semibold text-black">
        ⓘ More Info
        </button>
      </div>
      
    </div>
  )
}

export default VideoTitle
