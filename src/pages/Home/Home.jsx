import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Root from '../Root/Root';
import HomeFile from '../../components/HomeFile/HomeFile';
import AppsHome from '../AppsHome/AppsHome';


const Home = () => {
    const AppsPromise = fetch('/homeData.json').then(res => res.json())
    return (
        <div>
            {/* header */}
            <HomeFile></HomeFile>

            <Suspense>
                <AppsHome AppsPromise={AppsPromise}></AppsHome>
            </Suspense>
        <div>

        </div>






        </div>
    );
};

export default Home;