import React from 'react';
import bg from "../../images/h1-background-img-1.jpg"
import { offerLocations } from '../../constant';

const Mediterranean = () => {
    return (
        <div
            style={{
                background: `url('${bg}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "auto",
            }}
        >
            <div className='flex flex-col justify-center items-center gap-1 mb-20 pt-52'>
                <h3 className='text-sky-400 font text-5xl font-extrabold'>The Unforgettable</h3>
                <h1 className='text-6xl font-[1000] text-center'>Mediterranean</h1>
                <p className='text-center text-lg px-[20%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum</p>
            </div>

            <div className='flex sm:flex-row flex-col flex-wrap gap-6 justify-center items-center'>
                {
                    offerLocations.map((location, idx) => (
                        <div
                            key={idx}
                            className='w-[380px] h-[530px] overflow-hidden border-solid border-4 border-white relative'
                        >
                            <img
                                src={location.image}
                                alt={location.name}
                                loading='lazy'
                                className='w-full h-full object-cover
                                                rounded transition-transform hover:scale-110 grayscale-[40%] cursor-pointer duration-[2s]'
                            />
                            <div>
                                <h1 className='text-white text-xl font-bold -translate-y-20 translate-x-36 px-3'>{location.name}</h1>
                                <h1 className='text-white text-xl font-bold -translate-y-20 translate-x-36 px-3'>$   {location.price}</h1>
                                <h1 className='bg-sky-500 text-white text-lg px-4 py-2 font-bold font-sans absolute top-0 right-0'>{location.offer}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Mediterranean;