import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <div className="navbar bg-gradient-to-tr from-slate-400 text-white  justify-between backdrop-blur-md font-semibold font1 absolute z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-400 rounded w-auto">
                        <li>
                            <Link to='/news'>News</Link>
                        </li>
                        <li>
                            <Link to='/destination'>Destination</Link>
                        </li>
                        <li>
                            <Link to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <div className='flex gap-0'>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-none outline-none w-auto pr-14 pl-2 py-3 bg-white rounded rounded-r-none text-gray-600" />
                                <div
                                    className='bg-sky-600 p-4 rounded-r'
                                >
                                    <BsSearch />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case ml-5">
                    <img className='h-12 w-28' src={logo} alt='' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='nav'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='nav'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='nav'>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="flex-none gap-2">
                <div className=" hidden lg:flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border-none outline-none w-auto pr-14 pl-2 bg-white rounded rounded-r-none text-gray-600" />
                    <div
                        className='bg-sky-400 p-4 rounded-r'
                    >
                        <BsSearch />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;