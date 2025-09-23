import React from 'react';
import { Users, BarChart2, Bell, ShieldOff, MessageSquare } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard.jsx';
import CrowdChart from '../../components/features/CrowdChart.jsx';
import Card from '../../components/common/Card.jsx';

const AdminDashboard = () => {
    
    const recentActivity = [
        { id: 1, text: 'New complaint (#C-102) filed regarding sanitation.', time: '5m ago' },
        { id: 2, text: 'Volunteer team B acknowledged a high-priority medical alert.', time: '12m ago' },
        { id: 3, text: 'Crowd levels predicted to increase by 20% in the next hour.', time: '25m ago' },
        { id: 4, text: 'Lost item (#L-012 - Black Wallet) was logged.', time: '45m ago' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Administrator Dashboard</h1>
                <p className="text-gray-600">High-level overview of all temple operations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <StatCard title="Live Crowd Count" value="~1,520" icon={<Users />} />
                <StatCard title="Today's Peak" value="2,150" icon={<BarChart2 />} />
                <StatCard title="Active Incidents" value="2" icon={<Bell />} />
                <StatCard title="Security Alerts" value="0" icon={<ShieldOff />} />
                <StatCard title="Open Complaints" value="8" icon={<MessageSquare />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Live Crowd Distribution</h2>
                        <CrowdChart />
                    </Card>
                </div>
                <div>
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity Feed</h2>
                        <div className="space-y-4">
                            {recentActivity.map(activity => (
                                <div key={activity.id} className="text-sm">
                                    <p className="text-gray-700">{activity.text}</p>
                                    <p className="text-gray-500 text-xs">{activity.time}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;