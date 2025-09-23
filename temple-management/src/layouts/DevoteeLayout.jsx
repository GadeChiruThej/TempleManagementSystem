import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar.jsx';
import Footer from '../components/common/Footer.jsx';

// This layout is for all public-facing pages that share the main navbar and footer.
const DevoteeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* The Outlet component renders the specific page component for the current route */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default DevoteeLayout;