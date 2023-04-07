import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Place from '../place/Place';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Header from '../header/Header';
import bg from '../../images/full-shot-woman-travel-concept.jpg';


const Home = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then((res) => res.json())
            .then((data) => setPlaces(data))
    }, [])

    return (
        <div className='absolute'>
            <div className='relative bg text-white'>
                <Header />
                <div className='flex flex-col items-center p-[10%]'>
                    <h1 className="text-7xl font-extrabold font1 tracking-wider">Travel Guru</h1>
                    <p className="text-2xl font1 mt-2">Your travel companion</p>
                    <button
                        className='font1 bg-sky-400 px-10 py-2 hover:bg-sky-600 hover:scale-125 transition-transform text-lg font-semibold rounded mt-6'>
                        <Link
                            className='inline-flex items-center gap-1' to='/booking'
                        >
                            Book Now
                            <FaArrowAltCircleRight
                                className='mt-1' />
                        </Link>
                    </button>
                </div>
            </div>
            <div className="relative grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 px-24 pt-24 pb-[103%] bg3"
            >
                {
                    places.map(place => <Place key={place.id} place={place}></Place>)
                }
            </div>
        </div>

    );
};

export default Home;