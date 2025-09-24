import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '/' },
        { name: 'LIVE MAP', href: '/overview' }, // <-- UPDATED
        { name: 'TIMINGS', href: '/timings' },
        { name: 'DARSHAN BOOKING', href: '/darshan-booking' },
        { name: 'ROOM BOOKING', href: '/room-booking' },
        { name: 'DONATIONS', href: '/donations' },
        { name: 'COMPLAINTS', href: '/complaints' },
        { name: 'LOGIN', href: '/login' },
        { name: 'CONTACT US', href: '/contact' },
    ];

    return (
        <header className="relative z-30 bg-orange-800 bg-opacity-80 backdrop-blur-sm text-white shadow-lg">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center py-2 text-sm">
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.slice(0, 5).map(link => ( // Adjusted slice to include new link
                            <Link key={link.name} to={link.href} className="hover:text-orange-300 transition-colors font-semibold tracking-wider">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img src={logo} alt="Logo" className="h-20 w-20 rounded-full border-4 border-white shadow-lg object-cover" />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.slice(5).map(link => ( // Adjusted slice
                            <Link key={link.name} to={link.href} className="hover:text-orange-300 transition-colors font-semibold tracking-wider">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </nav>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-orange-800 bg-opacity-95">
                    <div className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(link => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                className="hover:text-orange-300 transition-colors font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;