import React, { useCallback, useEffect, useState } from 'react';
import InstallationHeader from './InstallationHeader';
import { Download, Star } from 'lucide-react';
import { useLoaderData } from 'react-router';
import { getStoredApps } from './addToDB';
import InstallationCard from './InstallationCard';
import { ToastContainer } from 'react-toastify';




const Installation = () => {

    const [AppsList, setAppsList] = useState([])
    const [isUpdated, setIsUpdated] = useState(0);

    const data = useLoaderData();
    // console.log(data)

    //cal
    const handleUpdate = useCallback(() => {
        setIsUpdated(p => p + 1)
    }, []);

    useEffect(() => {
        const storedAppsData = getStoredApps()
        const ConvertedStoredApps = storedAppsData.map(id => parseInt(id))
        const appsList = data.filter(apps => ConvertedStoredApps.includes(apps.id))
        setAppsList(appsList)
    }, [data, isUpdated])
    
    return (
        <div className='container mx-auto text-center my-20'>
            <InstallationHeader></InstallationHeader>

            <div>
                <ul className='flex justify-between items-center'>
                    <li className='text-[20px]'>( {AppsList.length} ) Apps Found</li>
                    <li><button className='btn font-extrabold'>Sort</button></li>
                </ul>
            </div>
            {/* card */}
            {
                AppsList.map(apps => <InstallationCard key={apps.id} apps={apps} onAppRemove={handleUpdate}></InstallationCard>)
            }

           
        </div>
    );
};

export default Installation;







