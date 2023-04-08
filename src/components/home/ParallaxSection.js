import React from 'react';
import { Parallax } from 'react-parallax';
import img1 from '../../images/blue-villa-beautiful-sea-hotel.jpg';
import img2 from '../../images/pink-suitcase-with-hat-globe-it.jpg';
import img3 from '../../images/high-angle-passport-tickets-arrangement.jpg';
import logo from "../../images/logo.png";


const ParallaxSection = () => {
    return (
        <div>
            <Parallax
                bgImage={img1}
                strength={600}
                bgImageStyle={{
                    filter: "brightness(77%)"
                }}
            >
                <div style={{
                    height: '70vh'
                }}
                    className='flex justify-center items-center'
                >
                    <img src={logo} alt="" className='h-48 w-96' />
                </div>
            </Parallax>
            <Parallax
                disabled={true}
                strength={300}
                bgImage={img2}
            >
                <div
                    className='backdrop-blur-sm'
                    style={{
                        height: '100vh',
                    }}
                >
                    <ul className='list-disc bg-gradient-to-b to-teal-400 from-teal-300 px-8 py-12 absolute right-24 text-white text-xl font-semibold font1 tracking-wide space-y-5 rounded-br-lg rounded-bl-lg flex justify-start flex-col shadow-lg shadow-black back'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </Parallax>
            <Parallax
                strength={600}
                bgImage={img3}
            >
                <div
                    style={{
                        height: '100vh',
                    }}
                >
                    <ul className='list-disc bg-gradient-to-b to-cyan-400 from-cyan-300 px-8 py-12 absolute left-24 text-white text-xl font-semibold font1 tracking-wide space-y-5 rounded-br-lg rounded-bl-lg flex justify-start flex-col shadow-lg shadow-black'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
            </Parallax>
        </div>
    );
};

export default ParallaxSection;