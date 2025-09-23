import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react'; // Added X icon for closing
import {
    LayoutDashboard, Users2, ShieldCheck, Search, Box,
    BarChart2, BrainCircuit, SearchX, PackageSearch, MessageSquare
} from 'lucide-react';
import logo from '../../assets/images/logo.png';

// The sidebar now accepts 'isOpen' state and 'onClose' function for mobile
const Sidebar = ({ userRole, isOpen, onClose }) => {
    const location = useLocation();
    const basePath = userRole === 'admin' ? '/admin' : '/volunteer';

    const adminLinks = [
        { name: 'Dashboard', path: basePath, icon: <LayoutDashboard size={20} /> },
        { name: 'Crowd Analytics', path: `${basePath}/analytics`, icon: <BarChart2 size={20} /> },
        { name: 'Crowd Prediction', path: `${basePath}/predictions`, icon: <BrainCircuit size={20} /> },
        { name: 'Missing Persons', path: `${basePath}/manage-missing`, icon: <SearchX size={20} /> },
        { name: 'Lost & Found', path: `${basePath}/manage-lost-found`, icon: <PackageSearch size={20} /> },
        { name: 'Complaints', path: `${basePath}/manage-complaints`, icon: <MessageSquare size={20} /> },
    ];

    const volunteerLinks = [
        { name: 'Dashboard', path: basePath, icon: <LayoutDashboard size={20} /> },
        { name: 'Crowd Management', path: `${basePath}/crowd-management`, icon: <Users2 size={20} /> },
        { name: 'Emergency Panel', path: `${basePath}/emergency`, icon: <ShieldCheck size={20} /> },
        { name: 'Missing Persons', path: `${basePath}/missing-persons`, icon: <Search size={20} /> },
        { name: 'Lost & Found', path: `${basePath}/lost-found`, icon: <Box size={20} /> },
    ];

    const links = userRole === 'admin' ? adminLinks : volunteerLinks;

    const linkClasses = (path) => `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        location.pathname === path
            ? 'bg-orange-600 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

    // On mobile, also close the sidebar when a link is clicked
    const handleLinkClick = () => {
        if (window.innerWidth < 768) { // md breakpoint
            onClose();
        }
    };
    
    return (
        <>
            {/* Overlay for mobile - appears when sidebar is open and closes it on click */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={onClose}
            ></div>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col z-40
                md:relative md:translate-x-0 transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
                        <span className="ml-3 text-lg font-bold">
                            {userRole === 'admin' ? 'Admin' : 'Volunteer'}
                        </span>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    {links.map((link) => (
                        <Link key={link.name} to={link.path} className={linkClasses(link.path)} onClick={handleLinkClick}>
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;