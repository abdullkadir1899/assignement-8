import React from 'react';
import { Github, GithubIcon } from 'lucide-react';
import { House } from 'lucide-react';
import Logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink to='/' className={({isActive}) => isActive ? 'underline text-[#632ee3] font-bold' : ''}>
            <ul className='flex'>
                <li className='text-black'><House/></li>
                <li className='m-2'>Home</li>
            </ul>
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'underline font-bold text-[#632ee3]' : ''}><li className='m-2'>Apps</li></NavLink>
        <NavLink to='/installation' className={({isActive}) => isActive ? 'underline font-bold text-[#632ee3]' : ''}><li className='m-2'>Installation</li></NavLink>

    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <Link className="btn btn-ghost text-xl text-[#632ee3]" to='/'> <img className='h-8' src={Logo} alt="" /> HERO.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/abdullkadir1899' className="btn  bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white"><GithubIcon/> Button</a>
  </div>
  
</div>
    );
};

export default Navbar;