import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Booking from "../components/booking/Booking";
import Contact from "../components/contact/Contact";
import Destination from "../components/destination/Destination";
import Home from "../components/home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/destination',
                element: <Destination />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/booking',
                element: <Booking />
            }
        ]
    }
])

export default router;