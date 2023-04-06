import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../header/Header';

const Booking = () => {
    const book = useLoaderData();
    console.log(book);
    return (
        <div className='bg2'>
            <Header />
            <div>

            </div>
        </div>
    );
};

export default Booking;