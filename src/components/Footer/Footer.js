import React from 'react';
import logo from "../../images/logo.png"


const Footer = () => {
    return (
        <div className='pt-20'>
            <footer className=" bg-gradient-to-t to-cyan-200 from-cyan-600 p-24 text-white text-lg font-semibold"
            >
                <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
                    <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
                        <div className="flex items-center justify-center flex-shrink-0">
                            <img
                                src={logo}
                                alt=""
                                className='w-40 h-20'
                            />
                        </div>
                        <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
                            <li className='font1'>
                                <a rel="noopener noreferrer" href="/">Terms of Use</a>
                            </li>
                            <li className='font1'>
                                <a rel="noopener noreferrer" href="/">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
                        <li className='font1'>
                            <a rel="noopener noreferrer" href="/">Instagram</a>
                        </li>
                        <li className='font1'>
                            <a rel="noopener noreferrer" href="/">Facebook</a>
                        </li>
                        <li className='font1'>
                            <a rel="noopener noreferrer" href="/">Twitter</a>
                        </li>
                    </ul>
                </div>
                <p className='text-center text-white font1 mt-5'>All rights preserved by @Travel Guru 2023</p>
            </footer>
        </div>
    );
};

export default Footer;