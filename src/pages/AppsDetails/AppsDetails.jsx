import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import download from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import lick from '../../assets/icon-review.png'
import RatingData from './RatingData';
import { toast } from 'react-toastify';


const AppsDetails = () => {
    const {id} = useParams()
    const appsId = parseInt(id)
    const data = useLoaderData()
    
    const singleApps = data.find(apps => apps.id === appsId);
    const {title, size, reviews, ratingAvg, image, downloads, description, companyName, ratings} = singleApps
    

    const [isInstalled, setIsInstalled] = useState(false);


    const handleInstall = () => {
            toast.success(`${title} installed successfully`)
            setIsInstalled(true)       
    }
    
    return (
        <div>
            {/* apps details */}
            <div className='container mx-auto  mt-20 mb-10'>
                <div className='flex gap-10 border-b-3 border-gray-300 p-5'>
                    <div>
                        <img className='rounded-xl h-full' src={image} alt="" />
                    </div>
                    <div className=''>
                        <ul className='border-b-2 p-2 w-full'>
                            <li className='text-[32px] font-bold'>{title}</li>
                            <li className='text-[20px] '>{companyName}</li>
                        </ul>

                        {/* Download */}
                        <div className='flex gap-10 mt-5'>
                        <ul className='flex flex-col items-center'>
                            <li><img src={download} alt="" /></li>
                            <li><p>Downloads</p></li>
                            <li><h1>{downloads}</h1></li>
                        </ul>

                        {/* ratings */}
                        <ul className='flex flex-col items-center'>
                            <li><img src={star} alt="" /></li>
                            <li><p>Average Ratings</p></li>
                            <li><h1>{ratingAvg}</h1></li>
                        </ul>

                        {/* Reviews */}
                        <ul className='flex flex-col items-center'>
                            <li><img src={lick} alt="" /></li>
                            <li><p>Total Reviews</p></li>
                            <li><h1>{reviews}</h1></li>
                        </ul>
                        </div>
                        

                        {/* install button */}
                        <div className='mt-5'>
                            <button onClick={handleInstall} className='btn btn-success text-white font-semibold' >{isInstalled ? 'Installed' : `Install Now (${size} MB)`}</button>
                        </div>
                        
                        
                    </div>
                </div>



            {/* Ratings section */}
            <div className=' border-b-3  border-gray-300'>
                <RatingData ratings={ratings}></RatingData>
            </div>
            {/* Description section */}
            <div className='mt-4 text-[20px] text-gray-400'>
                <h1>{description}</h1>
            </div>
                
            </div>
            





        </div> 
    );
};

export default AppsDetails;



