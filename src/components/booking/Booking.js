import React from 'react';
import Header from '../header/Header';

const Booking = () => {
    return (
        <div className='bg2'>
            <Header />
            <div className="relative flex justify-center p-[2%]">
                <div className="relative flex justify-center rounded-md w-[400px] min-h-[400px] bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md shadow-2xl shadow-black border-solid border-r-2 border-b-2 border-gray-400">
                    <div className="relative w-full h-full pt-5 pr-20 pb-5 pl-12">
                        <h2 className='font1 text-white text-2xl font-bold mb-10 tracking-wide before:absolute before:left-12 before:top-14 before:w-28 before:h-1 before:bg-white'>Booking</h2>
                        <form action="" className='font1'>
                            <div className="w-full mt-3">
                                <input
                                    type="text"
                                    placeholder='Name'
                                    className='w-full px-5 py-2 rounded border-solid border-r-2 border-[rgba(255, 255, 255, 0.2)] border-b-2 outline-none bg-gray-500 text-lg tracking-wide text-white shadow-sm shadow-black placeholder:text-white' />
                            </div>
                            <div className="mt-3">
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className='w-full px-5 py-2 rounded border-solid border-r-2 border-[rgba(255, 255, 255, 0.2)] border-b-2 outline-none bg-[rgba(255, 255, 255, 0.2)] text-lg tracking-wide text-white bg-gray-500 shadow-md shadow-black placeholder:text-white'
                                />
                            </div>
                            <div className="mt-3">
                                <input
                                    type="tel"
                                    placeholder='Mobile'
                                    className='w-full px-5 py-2 rounded border-solid border-r-2 border-[rgba(255, 255, 255, 0.2)] border-b-2 outline-none bg-[rgba(255, 255, 255, 0.2)] text-lg tracking-wide text-white bg-gray-500 shadow-md shadow-black placeholder:text-white'
                                />
                            </div>
                            <div className="mt-3">
                                <input
                                    type="tel"
                                    placeholder='Destination'
                                    className='w-full px-5 py-2 rounded border-solid border-r-2 border-[rgba(255, 255, 255, 0.2)] border-b-2 outline-none bg-[rgba(255, 255, 255, 0.2)] text-lg tracking-wide text-white bg-gray-500 shadow-md shadow-black placeholder:text-white'
                                />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor=""
                                    className='font1 text-white'
                                >From</label>
                                <input
                                    type="date"
                                    className='w-full px-5 py-2 rounded border-solid border-r-2 border-[rgba(255, 255, 255, 0.2)] border-b-2 outline-none bg-[rgba(255, 255, 255, 0.2)] text-lg tracking-wide text-white bg-gray-500 shadow-md shadow-black placeholder:text-white'
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor=""
                                    className='font1 text-white'
                                >To</label>
                                <input
                                    type="date"
                                    className='w-full px-5 py-2 rounded border-solid border-r-2 border-[rgba(255, 255, 255, 0.2)] border-b-2 outline-none bg-[rgba(255, 255, 255, 0.2)] text-lg tracking-wide text-white bg-gray-500 shadow-md shadow-black placeholder:text-white'
                                />
                            </div>
                            <div className="mt-3">
                                <input type="submit" value='Submit' className='bg-sky-400 text-white w-full cursor-pointer p-3 mt-3 mb-5 font-bold rounded' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;