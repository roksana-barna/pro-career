import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import Applied from './Component/Applied Jobs/Applied';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
      path:'/',
      element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
        },
        {
          path:'/applied',
          element:<Applied></Applied>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
            },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
