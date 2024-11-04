// import React from 'react'
// import Login from './Login'
// import Browse from './Browse'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'



// const Body = () => {
 
//     const appRouter= createBrowserRouter([
//         {
//             path:"/",
//             element:<Login/>
//         },
//         {
//             path:"/browse",
//             element:<Browse/>
//         }
//     ])


//   return (
//     <div>
//       <RouterProvider router={appRouter}/>
  
//     </div>
//   )
// }

// export default Body
import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TvShows from './TvShows'
import Movies from './Movies'
import NewPopular from './NewPopular'
import MyList from './MyList'
import ErrorPage from './ErrorPage'
import Layout from './Layout'
import Children from './Children'


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      element: <Layout/>, // This layout applies to all child routes below
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/browse",
          element: <Browse />
        },
        {
          path: "/home",
          element: <Browse />
        },
        {
          path: "/tvshows",
          element: <TvShows />
        },
        {
          path: "/movies",
          element: <Movies />
        },
        {
          path: "/new-popular", // Updated path to avoid special characters
          element: <NewPopular />
        },
        {
          path: "/mylist",
          element: <MyList />
        },
        {
          path: "/children",
          element: <Children />
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage /> // Catch-all route for undefined paths
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
