import React from 'react'
import Header from '../common/header/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '../home/Home'
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Contact from '../contact/Contact';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Pricing from '../pricing/Pricing';

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ],
    },
]);


function Pages() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Pages