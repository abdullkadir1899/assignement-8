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
            element: <Suspense fallback={<span className="loading loading-bars h-30  loading-xl"></span>}>
                <Home></Home>
            </Suspense>,
        },
        {
            path: '*',
            element: <Error />
        },
        {
            path: '/about',
            element: <About/>,
            loader: () => fetch('/aboutData.json'),
            
        }
    ]
},

  
])

export default router