import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import Root from '../pages/Root/Root';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <Error/>,
    children: [
        {
            index: true,
            element: <Suspense fallback={<span>Loading...</span>}>
                <Home></Home>
            </Suspense>,
        },
        {
            path: '/about',
           
        },
        {
            path: '*',
            element: <Error />
        }
    ]
  },
  
])

export default router