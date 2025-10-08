import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import Root from '../pages/Root/Root';
import About from '../pages/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Home></Home>
            </Suspense>,
        },
        {
            path: '/about',
            element: <About/>
           
        },
        {
            path: '*',
            element: <Error />
        }
    ]
  },
  
])

export default router