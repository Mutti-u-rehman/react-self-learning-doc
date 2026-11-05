
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactUs/ContactUs';
import AboutUs from './components/aboutUs/AboutUs';
import PageNotFound from './components/pageNotFound/PageNotFound';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <PageNotFound />,
        children: [
            { index: true, element: <Body /> },
            { path: "about", element: <AboutUs /> },
            { path: "contact", element: <ContactUs /> },
            { path: "*", element: <PageNotFound /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);