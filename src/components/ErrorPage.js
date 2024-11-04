import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div>
      This is error page 
    </div>
  )
}

export default ErrorPage
