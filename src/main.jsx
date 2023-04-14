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
import Details from './Component/Details/Details';
import JobDetails from './Component/JobDetails';
import NotFound from './Component/NotFound';
import Apply from './Component/Applied items/Apply';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement: <NotFound></NotFound>,
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('Category.json')
     
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      
        },
        {
                  
             path:'/applied',
             element:<Applied></Applied>,
             loader:()=>fetch('./Jobs.json')

          },
          {
             path:'/blog',
            element:<Blog></Blog>
            },
            {
              path:'/detail/:id',
              element:<Details></Details>,
              loader:()=>fetch('../Jobs.json')
            },
              

    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
