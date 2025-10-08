import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import Root from '../pages/Root/Root';
import About from '../pages/About/About';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import App from '../App';
import Installation from '../pages/Installation/Installation';


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
        },
        {
            path: '/appsDetails/:id',
            element: <AppsDetails/>,
            loader: () => fetch('/aboutData.json'),
            children: [
                {
                    path: '*',
                    element: <Error/>
                }
            ]
        },
        {
            path: '/installation',
            element: <Installation/>,
            loader: () => fetch('/aboutData.json')
        },
        {
          path: '/shadowKing',
          element: <App/>
        }

    ]
},

  
])

export default router