import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div >
            <div>
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;