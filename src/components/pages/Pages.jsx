import React from 'react'
import Header from '../common/header/Header'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from '../home/Home'

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
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