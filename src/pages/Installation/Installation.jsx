import React from 'react';
import InstallationHeader from './InstallationHeader';
import { Download, Star } from 'lucide-react';

const Installation = () => {
    return (
        <div className='container mx-auto text-center my-20'>
            <InstallationHeader></InstallationHeader>

            <div>
                <ul className='flex justify-between items-center'>
                    <li className='text-[20px]'> Apps Found</li>
                    <li><button className='btn font-extrabold'>Sort</button></li>
                </ul>
            </div>
            {/* card */}
            <div className=' p-4 my-5 rounded-2xl shadow-2xl bg-gray-200'>
                <div className='flex gap-5 justify-between'>
                    
                    <div>
                        <div>
                        <img src="" alt="" />
                        </div>
                        <h1>asdf</h1>
                        <ul className='flex gap-5'>
                            <li><Download/> </li>
                            <li><Star/></li>
                            <li>Mb</li>
                        </ul>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Uninstall</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Installation;





