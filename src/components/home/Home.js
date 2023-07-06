import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Place from '../place/Place';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Header from '../header/Header';
import ParallaxSection from './ParallaxSection';
import AnimatedSection from './AnimatedSection';
import Locations from './Locations';
import VideoSec from './VideoSec';
import Facility from './Facility';





const Home = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://destination-unknown-server.vercel.app/destination')
            .then((res) => res.json())
            .then((data) => setPlaces(data))
    }, [])

    return (
        <div>
            <div className='relative bg text-white'>
                <Header />
                <div className='flex flex-col translate-y-[100%] items-center justify-center'>
                    <h1 className="text-7xl font-extrabold font1 tracking-wider text-center">Travel Guru</h1>
                    <p className="text-2xl font1 mt-2">Your travel companion</p>
                    <button
                        className='font1 bg-sky-400 px-10 py-2 hover:bg-sky-600 hover:scale-125 transition-transform duration-500 text-lg font-semibold rounded mt-6'>
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
            <div className="relative bg3"
            >
                <h1 className='text-white text-center text-3xl font1 font-bold mt-16'>Places</h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6 mx-10  mt-10 pb-[70%]'>
                    {
                        places.map(place => <Place key={place.id} place={place}></Place>)
                    }
                </div>
            </div>
            <div>
                <AnimatedSection />
            </div>
            <div>
                <ParallaxSection />
            </div>
            <div>
                <Locations />
            </div>
            <div>
                <VideoSec />
            </div>
            <div>
                <Facility />
            </div>
        </div>

    );
};

export default Home;