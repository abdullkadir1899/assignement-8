import React from 'react';
import play from '../../assets/fi_16076057.png'
import AppStore from '../../assets/fi_5977575.png'
import mobile from '../../assets/hero.png'

const HomeFile = () => {
    return (
        <div>
                        <div>
                <h1 className='lg:text-[72px] md:text-[30px] text-[30px] font-bold text-center mt-20 mb-5'>We Build <br /> <span className='text-[#9f62f2]'>Productive</span> Apps</h1>
                <p className='text-5 text-gray-500 font-semibold text-center'>AtHERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting <br /> .Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <ul className='flex gap-3 flex-col md:flex-row  justify-center my-5'>
                    <li><a href='https://play.google.com/store/games?hl=en'><button className='btn '><img src={play} alt="" />Google play stor</button></a></li>
                    <li><a href='https://www.apple.com/app-store/'><button className='btn '><img src={AppStore} alt="" />App Store</button></a></li>
                </ul>
            </div>
            {/* mobile section  */}
            <div  className='flex justify-center'>
                <img src={mobile} alt="" />
            </div>


            {/* trusted By Millions, */}
            <div className='bg-linear-to-r from-[#632ee3] to-[#9f62f2] p-6'>
                <div className=' container mx-auto'>
                <h1 className='text-[48px] font-bold text-white text-center'>Trusted By Millions, Built For you</h1>
                <div className=' flex gap-20 flex-col md:flex-row justify-center my-5'>
                    <ul className='flex flex-col  text-center'>
                        <li><p className='text-5 text-white font-semibold'>Total Downloads</p></li>
                        <li><h1 className='text-[64px] text-white font-bold'>29.6M</h1></li>
                        <li><p className='text-5 text-white font-semibold'>21% more than last month</p></li>
                    </ul>
                    <ul className='flex flex-col text-center'>
                        <li><p className='text-5 text-white font-semibold'>Total Downloads</p></li>
                        <li><h1 className='text-[64px] text-white font-bold'>29.6M</h1></li>
                        <li><p className='text-5 text-white font-semibold'>21% more than last month</p></li>
                    </ul>
                    <ul className='flex flex-col text-center'>
                        <li><p className='text-5 text-white font-semibold'>Total Downloads</p></li>
                        <li><h1 className='text-[64px] text-white font-bold'>29.6M</h1></li>
                        <li><p className='text-5 text-white font-semibold'>21% more than last month</p></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeFile;