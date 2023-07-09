import React, { useEffect, useState } from 'react';
import Place from '../place/Place';
import Header from '../header/Header';
import ParallaxSection from './ParallaxSection';
import AnimatedSection from './AnimatedSection';
import Locations from './Locations';
import VideoSec from './VideoSec';
import Facility from './Facility';
import Mediterranean from './Mediterranean';
import Review from './Review';
import Blog from './Blog';
import Country from './Country';
import Hero from './Hero';
import Input from './Input';







const Home = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://destination-unknown-server.vercel.app/destination')
            .then((res) => res.json())
            .then((data) => setPlaces(data))
    }, [])

    return (
        <div>
            <div className='relative'>
                <Header />
                <Hero />
                <Input />
            </div>
            <div className="relative bg3"
            >
                <h1 className='text-white text-center text-3xl font1 font-bold mt-36'>Places</h1>
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
            <div>
                <Mediterranean />
            </div>
            <div>
                <Review />
            </div>
            <div>
                <Blog />
            </div>
            <div>
                <Country />
            </div>
        </div >

    );
};

export default Home;