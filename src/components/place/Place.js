import React from 'react';
import { Link } from 'react-router-dom';

const Place = ({ place }) => {
    const { place_name, img, id } = place;
    return (

        <div className="card card-compact bg-sky-300 hover:scale-105 transition-transform  shadow-black shadow-lg rounded-none font1 text-white">
            <Link to={`/booking/${id}`}>
                <figure title={place_name}>
                    <img className=' w-auto h-96' src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title" title={place_name}>{place_name}</h2>
                </div>
            </Link>
        </div>

    );
};

export default Place;