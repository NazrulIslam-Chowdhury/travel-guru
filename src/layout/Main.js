import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div >
            <div>
                <Outlet />
                <div className='mt-5'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;