import React from 'react';
import AppError from '../../assets/App-Error.png'
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
        <div className='container mx-auto my-40'>
            <div className='flex justify-center items-center'>
                <img src={AppError} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center my-10 gap-4'>
                <h1 className='text-[48px] font-bold '>App Not Found</h1>
                <h1 className='text-[20px] '>The App you are requesting is not found on our system.  please try another apps</h1>
                <div>
                    <Link to='/about'><button className="btn  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">Go Back Apps</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;