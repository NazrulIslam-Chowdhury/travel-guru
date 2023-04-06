import React from 'react';
import Header from '../header/Header';

const Booking = () => {
    return (
        <div className='bg2'>
            <Header />
            <div className="relative flex justify-center p-[10%]">
                <div className="relative flex justify-center rounded-md w-[400px] min-h-[400px] bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md shadow-2xl border-solid border-r-2 border-b-2 border-gray-400">
                    <div className="form">
                        <h2>Booking</h2>
                        <form action="">
                            <div className="inputBox">
                                <input
                                    type="text"
                                    placeholder='Name' />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="email"
                                    placeholder='Email' />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="tel"
                                    placeholder='Mobile' />
                            </div>
                            <div className="inputBox">
                                <input
                                    type="date" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value='Submit' className='bg-sky-400 text-white w-full' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;