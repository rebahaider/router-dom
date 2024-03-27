import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Listedbooks from './Components/Listedbooks/Listedbooks.jsx'
import MainLayOuts from './Components/Layouts/MainLayOuts.jsx'
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx'
import SinglePage from './Components/SinglePage/SinglePage.jsx'
import ErrorPages from './Components/ErrorPages/ErrorPages.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    errorElement: <ErrorPages></ErrorPages>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/singlePage/:bookId",
        element: <SinglePage></SinglePage>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/listedbooks",
        element: <Listedbooks></Listedbooks>,
      },
      {
        path: "/pagetoread",
        element: <PagesToRead></PagesToRead>
      },
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
