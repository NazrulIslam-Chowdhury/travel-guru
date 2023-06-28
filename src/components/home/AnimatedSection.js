import React from 'react';
import gif1 from '../../images/2523-loading.gif';
import gif2 from '../../images/90770-traveller.gif';

const AnimatedSection = () => {
    return (
        <div className='bg-white p-14'>
            <div className='flex flex-col lg:flex-row  gap-10 items-center py-14'>
                <img
                    src={gif1}
                    alt=""
                    className='w-96 h-96'
                />
                <div>
                    <h1 className='text-4xl font-extrabold font1'>
                        Easy Travel with
                        <span className='text-cyan-600 text-5xl'>Travel Guru</span>
                    </h1>
                    <p className='text-xl mt-4 font1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum maiores voluptatibus nesciunt numquam similique, consequuntur, eos eaque atque aperiam doloremque quia dolores veritatis alias? Ea nostrum ipsum nam, optio excepturi libero voluptatem, voluptas debitis ex quos animi, officia porro neque fugit! Veniam similique possimus aliquam voluptas velit error eaque culpa!</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                <div>
                    <h1 className='text-4xl font-extrabold font1'>
                        Find easy hotel with
                        <span className='text-cyan-600 text-5xl'>Travel Guru</span>
                    </h1>
                    <p className='text-xl mt-4 font1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, excepturi sequi hic praesentium harum asperiores, quia nostrum ullam aut, nam iste voluptates placeat eveniet cumque. Aliquam nulla laborum porro veritatis veniam excepturi repellat error ipsum accusamus amet rem quam perspiciatis, doloremque iusto alias quia voluptate officia. Obcaecati ipsam quibusdam recusandae?</p>
                </div>
                <img
                    src={gif2}
                    alt=""
                    className='w-96 h-96'
                />
            </div>
        </div>
    );
};

export default AnimatedSection;