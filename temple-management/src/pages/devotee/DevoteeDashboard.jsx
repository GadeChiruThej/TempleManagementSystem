import React from 'react';
import { Clock, BedDouble, FileText, HeartHandshake, UserCircle } from 'lucide-react';
import Card from '../../components/common/Card';
import StatCard from '../../components/dashboard/StatCard'; // Reusing StatCard for a consistent look

const DevoteeDashboard = () => {

    const quickLinks = [
        { title: 'Book Darshan', href: '#', icon: <Clock className="w-8 h-8 text-orange-600" /> },
        { title: 'Book a Room', href: '#', icon: <BedDouble className="w-8 h-8 text-orange-600" /> },
        { title: 'Make a Donation', href: '#', icon: <HeartHandshake className="w-8 h-8 text-orange-600" /> },
        { title: 'Register a Complaint', href: '#', icon: <FileText className="w-8 h-8 text-orange-600" /> },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-orange-50 min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Welcome, Devotee!</h1>
                <p className="text-gray-600">Manage your spiritual journey with Shree Somnath Trust.</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard title="Upcoming Darshan" value="Tomorrow, 8:00 AM" icon={<Clock className="w-8 h-8 text-white" />} />
                <StatCard title="Active Room Booking" value="1 Room (A-101)" icon={<BedDouble className="w-8 h-8 text-white" />} />
                <StatCard title="Last Donation" value="₹501.00" icon={<HeartHandshake className="w-8 h-8 text-white" />} />
            </div>

            {/* Quick Links Section */}
            <Card>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {quickLinks.map(link => (
                        <a key={link.title} href={link.href} className="p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors duration-200 flex flex-col items-center justify-center space-y-2">
                            {link.icon}
                            <span className="font-semibold text-gray-700">{link.title}</span>
                        </a>
                    ))}
                </div>
            </Card>

             {/* Recent Activity */}
            <div className="mt-8">
                <Card>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <Clock className="w-5 h-5 text-green-600" />
                            <p className="text-gray-700">Successfully booked Darshan slot for 24th Sept, 2025.</p>
                            <span className="text-sm text-gray-500 ml-auto">1 day ago</span>
                        </li>
                        <li className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                            <FileText className="w-5 h-5 text-yellow-600" />
                            <p className="text-gray-700">Complaint #1024 status updated to 'In Progress'.</p>
                             <span className="text-sm text-gray-500 ml-auto">3 days ago</span>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default DevoteeDashboard;