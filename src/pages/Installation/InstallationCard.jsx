import { Download, Star } from 'lucide-react';
import React from 'react';

const InstallationCard = ({apps}) => {
    const {image, ratingAvg, downloads, size, title} = apps
    return (
        <div className=' p-4 my-5 rounded-2xl shadow-2xl bg-gray-200'>
                <div className='flex gap-5 justify-between items-center'>
                    
                    <div className='flex gap-5 items-center'>
                        <div>
                        <img  className=' size-20 rounded-xl' src={image} alt="" />
                        </div>
                        
                        <ul className='flex gap-5 flex-col'>
                            <div className='text-left font-bold text-xl'>
                                <h1>{title}</h1>
                            </div>
                            <div className='flex gap-5'>
                            <ul className='flex items-center gap-1'>
                                <li><Download/></li>
                                <li>{downloads}</li>
                            </ul>
                            <ul className='flex gap-1'>
                                <li><Star/></li>
                                <li>{ratingAvg}</li>
                            </ul>
                            <li>Mb {size}</li>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Uninstall</button>
                    </div>
                </div>
            </div>
    );
};

export default InstallationCard;