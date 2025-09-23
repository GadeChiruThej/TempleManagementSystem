import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.js';
import { LogOut, UserCircle, Menu } from 'lucide-react'; // Added Menu icon

// The header now accepts a function to toggle the sidebar
const DashboardHeader = ({ title, onMenuClick }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <header className="bg-gray-800 shadow-md p-4 flex justify-between items-center z-20 text-white">
            <div className="flex items-center">
                {/* Hamburger Menu Button - ONLY shows on mobile (hidden on medium screens and up) */}
                <button onClick={onMenuClick} className="md:hidden mr-4 text-white">
                    <Menu size={24} />
                </button>
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-2"> {/* Hide user name on very small screens */}
                    <UserCircle size={24} />
                    <span>Welcome, {user ? user.name : 'Guest'}</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
                >
                    <LogOut size={20} />
                    <span className="hidden sm:inline">Logout</span> {/* Hide text on very small screens */}
                </button>
            </div>
        </header>
    );
};

export default DashboardHeader;