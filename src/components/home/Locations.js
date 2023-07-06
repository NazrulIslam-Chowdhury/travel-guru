import React from 'react';
import { countries } from "../../constant"
import star from "../../images/icons/star_1_.png"
    ;
const Locations = () => {
    return (
        <div className='py-20'>
            <div className='flex flex-col justify-center items-center gap-1 mb-20'>
                <h3 className='text-sky-400 font text-5xl font-extrabold'>Choose Your</h3>
                <h1 className='text-6xl font-[1000]'>Perfect Holiday</h1>
                <p className='text-center text-lg px-[20%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id veniam odio tempore quidem iusto eveniet quae cupiditate veritatis eligendi?</p>
            </div>
            <div className='flex flex-col gap-16 items-center justify-center'>
                {
                    countries.map((country, idx) => (
                        <div key={idx} className='relative flex sm:flex-row flex-wrap flex-col gap-6 items-center'>
                            <div
                                className='w-[350px] h-[350px] overflow-hidden rounded-full border-solid border-4 border-white'
                            >
                                <img
                                    className='w-full h-full rounded-full transition-transform hover:scale-110 cursor-pointer duration-[2s]'
                                    src={country.image}
                                    alt={country.name}
                                />
                                <p className='text-white font-extrabold text-5xl absolute translate-x-32 -translate-y-48 z-10 font'>{country.name}</p>
                            </div>

                            <div className='flex flex-wrap gap-6 justify-center'>
                                {
                                    country.locations.map((location, idx) => (
                                        <div
                                            key={idx}
                                            className='w-[350px] h-[350px] overflow-hidden border-solid border-4 border-white'
                                        >
                                            <img
                                                src={location.image}
                                                alt={location.name}
                                                className='w-full h-full
                                                rounded transition-transform hover:scale-110 grayscale-[40%] cursor-pointer duration-[2s]'
                                            />
                                            <div className='flex absolute z-10 -translate-y-20 px-3'>
                                                <div className='flex flex-col gap-2'>
                                                    <h1 className='text-white text-xl font-bold'>{location.name}</h1>
                                                    <div className='flex gap-2 items-center'>
                                                        <img src={star} alt="rating" className='w-5 h-5' />
                                                        <p className='text-white text-xl font-bold'>{location.rating}</p>
                                                    </div>
                                                </div>
                                                <h1 className='text-white text-xl font-bold translate-x-36'>$   {location.price}</h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Locations;