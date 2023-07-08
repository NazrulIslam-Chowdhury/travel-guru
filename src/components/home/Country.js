import React from 'react';
import bg from "../../images/h1-background-img-2.jpg"
import { europeCountries } from '../../constant';

const Country = () => {
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
                <h3 className='text-sky-400 font text-5xl font-extrabold'>Choose Your</h3>
                <h1 className='text-6xl font-[1000]'>Destination</h1>
                <p className='text-center text-lg px-[30%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur cum in, impedit perspiciatis earum similique?</p>
            </div>

            <div className='flex sm:flex-row flex-col flex-wrap gap-6 justify-center items-center'>
                {
                    europeCountries.map((location, idx) => (
                        <div
                            key={idx}
                            className='w-[350px] h-[350px] overflow-hidden border-solid border-4 border-white rounded-full relative'
                        >
                            <img
                                src={location.image}
                                alt={location.name}
                                className='w-full h-full object-cover rounded-full
                                         transition-transform hover:scale-110 brightness-75 grayscale-[40%] cursor-pointer duration-[2s]'
                            />
                            <div className=' text-white font-extrabold text-5xl absolute translate-x-24 -translate-y-48 z-10 font'>
                                <h1 className='text-white text-5xl font-bold px-3'>{location.name}</h1>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Country;