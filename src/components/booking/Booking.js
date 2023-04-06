import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../header/Header';

const Booking = () => {
    const book = useLoaderData();
    console.log(book);
    return (
        <div className='bg2'>
            <Header />
            {/* <div className="box">
                <div className="container">
                    <div className="form">
                        <h2>Appointment</h2>
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
                                <input type="submit" value='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Booking;