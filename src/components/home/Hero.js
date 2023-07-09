import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';


const Hero = () => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: false
    })

    return (
        <div className='w-[100%] h-[700px] overflow-hidden relative'>
            <div className='image-slider relative' />
            <div ref={ref} className='flex flex-col sm:-translate-y-[220%] -translate-y-[170%] items-center justify-center'>
                <h1 className={`text-5xl text-white font-extrabold font1 tracking-wider text-center font ${inView ? 'text1' : "hidden"}`}>Come With Us</h1>
                <p className={`text-8xl text-white mt-2 font-[1000] ${inView ? 'text2' : "hidden"} text-center`}>Explore and Travel</p>
                <button
                    className={`bg-white px-10 py-2 text-gray-500 hover:scale-125 transition-transform duration-500 text-lg font-semibold rounded mt-6 ${inView ?
                        "button" : "hidden"} border-none`}>
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
    );
};

export default Hero;