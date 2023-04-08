import React from 'react';
import { useLoaderData } from "react-router-dom";
import Header from '../header/Header';


const DestinationDetail = () => {
    const detail = useLoaderData();
    const { place_name, img, details } = detail;
    console.log(detail);

    return (
        <div className='bg2'>
            <Header />
            <div className='relative flex justify-center py-[13%] lg:p-[6%] md:p-[3%] mx-3 mb-3'>
                <div className='relative flex justify-center rounded-md w-[800px] h-auto bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md shadow-2xl shadow-black border-solid border-r-2 border-b-2 border-gray-400'>
                    <div className='relative w-full h-full pt-5 pr-20 pb-5 pl-12'>
                        <img src={img} alt="" />
                        <h1 className='font1 text-white text-4xl mt-3'>{place_name}</h1>
                        <div className='mt-5'>
                            <p className='font1 text-white text-xl'>{details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetail;