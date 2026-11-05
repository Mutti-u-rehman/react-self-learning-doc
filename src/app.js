
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import ContactUs from './components/contactUs/ContactUs';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div id="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Body />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="*" element={<Body />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppRoutes />);