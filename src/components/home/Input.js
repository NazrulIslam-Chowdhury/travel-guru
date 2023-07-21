import React from 'react';
import { IoNavigateCircleSharp } from "react-icons/io5";
import { BsPinFill } from "react-icons/bs";

const Input = () => {
    return (
        <div className='lg:flex-row md:flex-col flex-col flex justify-center -mt-11 z-10 absolute lg:translate-x-[82px] md:translate-x-[225px] '>
            <div>
                <input type="text" placeholder='Where to ?' className='w-full py-8 pl-8 pr-40 border-b-2 border-r-2 border-solid border-gray-400 outline-none ' />
                <IoNavigateCircleSharp className='w-5 h-5 absolute top-[34px] text-gray-400 ml-2 ' />
            </div>
            <div>
                <input type="month" placeholder='none' className='w-full py-[31px] pl-8 pr-40  outline-none border-b-2 border-r-2 border-solid border-gray-400 ' />
            </div>
            <div>
                <input type="text" placeholder='Travel Type' className='w-full py-8 pl-8 pr-40  outline-none border-r-2 border-b-2 border-solid border-gray-400 ' />
                <BsPinFill className='w-5 h-5 -translate-y-[52px] text-gray-400 ml-2' />
            </div>
            <div>
                <p className='bg-sky-400 hover:bg-sky-500 flex text-white text-md font-bold py-8 px-20 border-b-2 border-solid border-gray-400  uppercase cursor-pointer' >
                    Find Now
                </p>
            </div>
        </div>
    );
};

export default Input;