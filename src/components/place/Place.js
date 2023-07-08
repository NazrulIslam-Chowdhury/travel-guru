import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({ place }) => {
    const { place_name, img, id } = place;
    return (
        <div className="card card-compact bg-gradient-to-t to-sky-900 from-sky-600  transition-transform shadow-black shadow-lg rounded-none font1 text-white">
            <Link to={`/destination/${id}`}>
                <figure title={place_name} className='w-[auto] h-[350px] overflow-hidden'>
                    <img className=' w-full h-full object-cover transition-transform duration-[2s] hover:scale-110' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title" title={place_name}>{place_name}</h2>
                </div>
            </Link>
        </div>
    );
};

export default Place;