import React from 'react';
import error from '../../assets/error-404.png'
import { useNavigate } from 'react-router';

const Error = () => {
const navigate = useNavigate('/')

    return (
        <div className=' container mx-auto'>
            <div className=' flex flex-col items-center my-50'>
            <div>
                <img  src={error} alt="" />
            </div>
            <div className='flex flex-col text-center mt-20'>
                <h1 className='text-[48px] font-bold'>Page Not Found!</h1>
                <p className='mt-3 mb-2'>The page you are looking for is not available.</p>
                <button onClick={() => navigate('/')} className='btn btn-primary'> Go Back!</button>
            </div>
        </div>
        </div>
    );
};

export default Error;