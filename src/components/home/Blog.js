import React from 'react';
import { blogs } from '../../constant';
import banner from "../../images/h1-banner-img-1.jpg"

const Blog = () => {
    return (
        <div className='flex flex-col sm:flex-row gap-10 sm:p-20 p-10 relative overflow-hidden'>
            <div>
                <div>
                    <h1 className='text-6xl font-[1000]'>From Our Blog</h1>
                    <p className='mt-4 font-semibold text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque aperiam ut animi eum possimus blanditiis velit quos consequuntur eaque incidunt.</p>
                </div>
                <div className='flex flex-col gap-5 mt-10'>
                    {
                        blogs.map((blog) => (
                            <div className='flex gap-5 '>
                                <div className='w-[200px] h-[150px] overflow-hidden border-2 border-solid border-white'>
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className='w-full h-full transition-transform hover:scale-110 cursor-pointer duration-[2s] object-cover' />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <h1 className='text-xl font-[1000]'>{blog.title}</h1>
                                    <p className='text-gray-600 text-sm font-medium pr-10'>{blog.details}</p>
                                    <h3 className='text-base font-bold'>{blog.date}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div className='relative before:absolute  banner'>
                    <img
                        src={banner} alt="Banner"
                        className='w-[500px] h-[500px] object-cover'
                    />
                    {/* <div className='bg-red-500 w-[500px] -translate-y-[500px] h-[500px] banner'>

                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Blog;