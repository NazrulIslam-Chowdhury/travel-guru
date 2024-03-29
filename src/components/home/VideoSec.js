import React from 'react';
import bg from "../../images/places/Varadero.jpg";
import { Parallax } from 'react-parallax';

const VideoSec = () => {
    return (
        <div className='relative'>
            <Parallax
                bgImage={bg}
                strength={600}
                className='brightness-75'
            >

                <div style={{
                    height: '100vh',
                }}
                    className='flex justify-center mt-16'>
                    <div className='flex flex-col justify-center items-center gap-3 mb-20 absolute'>
                        <h3 className='text-sky-300 font text-5xl font-extrabold'>Go and Discover</h3>
                        <h1 className='text-white text-6xl font-[1000] text-center'>Breathtaking Cities</h1>
                        <p className='text-slate-200 text-center text-lg px-[20%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sequi, quos atque iusto soluta praesentium. Molestias eum illum tempora dignissimos.</p>
                    </div>
                    <iframe width="1000" height="520" src="https://www.youtube.com/embed/shzC2DUO9Hg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                        className='absolute -bottom-12'
                    ></iframe>
                </div>
            </Parallax>
        </div>
    );
};

export default VideoSec;