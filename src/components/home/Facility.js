import React from 'react';
import camera from "../../images/icons/camera.png";
import map from "../../images/icons/map.png";
import shop from "../../images/icons/shop.png";
import earth from "../../images/icons/earth.png";

const Facility = () => {
    return (
        <div className='flex sm:flex-row flex-col justify-evenly gap-6 p-20'>
            <div className='flex flex-col gap-3 items-center'>
                <img className='w-20 h-20' src={camera} alt="Restaurants" />
                <h1 className='text-lg font-extrabold'>Restaurants</h1>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, deserunt.</p>
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <img className='w-20 h-20' src={map} alt="Sightseeing" />
                <h1 className='text-lg font-extrabold'>Sightseeing</h1>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate.</p>
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <img className='w-20 h-20' src={shop} alt="Shops and Boutiques" />
                <h1 className='text-lg font-extrabold'>Shops and boutiques</h1>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate.</p>
            </div>

            <div className='flex flex-col gap-3 items-center'>
                <img className='w-20 h-20' src={earth} alt="Where to stay" />
                <h1 className='text-lg font-extrabold'>Where to stay</h1>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, voluptate.</p>
            </div>
        </div>
    );
};

export default Facility;