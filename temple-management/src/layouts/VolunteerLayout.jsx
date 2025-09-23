import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar.jsx';
import DashboardHeader from '../components/dashboard/DashboardHeader.jsx';

const VolunteerLayout = () => {
    // State to manage sidebar visibility on mobile
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="relative flex h-screen bg-gray-900 overflow-hidden">
            <Sidebar 
                userRole="volunteer" 
                isOpen={isSidebarOpen} 
                onClose={() => setIsSidebarOpen(false)} 
            />
            <div className="flex-1 flex flex-col">
                <DashboardHeader 
                    title="Volunteer Portal" 
                    onMenuClick={() => setIsSidebarOpen(true)} 
                />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-800 p-4 sm:p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default VolunteerLayout;