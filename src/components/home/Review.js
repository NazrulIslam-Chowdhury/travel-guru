import React from 'react';
import { Parallax } from 'react-parallax';
import bg from "../../images/travelaround.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, } from 'swiper/modules';
import { AiFillStar } from "react-icons/ai"

import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from '../../constant';

const Review = () => {
    return (
        <div className='py-20 relative'>
            <Parallax
                bgImage={bg}
                strength={600}
                bgImageStyle={{
                    filter: "brightness(70%)"
                }}
                bgImageSizes='cover'
            >
                <div
                    style={{
                        height: "100vh"
                    }}
                >

                    <div className='flex flex-col justify-center items-center gap-3 mb-20 sm:pt-36 pt-16'>
                        <h3 className='text-white font text-5xl font-extrabold'>Read the Top</h3>
                        <h1 className='text-white text-6xl font-[1000]'>Travel reviews</h1>
                        <p className='text-white text-center text-lg px-[20%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nostrum</p>
                    </div>
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay,]}
                        className="mySwiper"
                    >
                        {
                            reviews.map((review, idx) => (
                                <SwiperSlide key={idx} className='cursor-grabbing'>
                                    <div className='flex gap-4 items-center bg-white p-10 rounded'>
                                        <img src={review.image} alt={review.name} className='w-36 h-36 object-cover rounded-full' />
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='font-black text-2xl'>{review.place}</h1>
                                            <div className='flex flex-row gap-1 items-center'>
                                                <AiFillStar className='w-4 h-4 text-sky-400' />
                                                <AiFillStar className='w-4 h-4 text-sky-400' />
                                                <AiFillStar className='w-4 h-4 text-sky-400' />
                                                <AiFillStar className='w-4 h-4 text-sky-400' />
                                                <AiFillStar className='w-4 h-4 text-sky-400' />
                                            </div>
                                            <p className='text-sm text-gray-500 font-bold'>{review.detail}</p>
                                            <h3 className='text-xl font-black'>{review.name}</h3>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </Parallax>
        </div>
    );
};

export default Review;