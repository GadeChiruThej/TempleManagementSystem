import React from 'react';
import { Users, AlertTriangle, Radio, Search, ShieldCheck } from 'lucide-react';
import StatCard from '../../components/dashboard/StatCard';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const VolunteerDashboard = () => {
    
    const activeAlerts = [
        { id: 1, text: 'High crowd density reported near Gate 3.', priority: 'High' },
        { id: 2, text: 'Medical assistance requested near Prasad Counter.', priority: 'Medium' },
        { id: 3, text: 'Unattended bag found near Cloak Room.', priority: 'Low' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Volunteer Control Center</h1>
                <p className="text-gray-600">Thank you for your service. Here is your current overview.</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Current Crowd Level" value="Moderate" icon={<Users className="w-8 h-8 text-white" />} />
                <StatCard title="Active Alerts" value="3" icon={<AlertTriangle className="w-8 h-8 text-white" />} />
                <StatCard title="Available Volunteers" value="45" icon={<ShieldCheck className="w-8 h-8 text-white" />} />
                 <StatCard title="Open Cases" value="5" icon={<Search className="w-8 h-8 text-white" />} />
            </div>

            {/* Active Alerts */}
            <Card>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Alerts & Tasks</h2>
                <div className="space-y-4">
                    {activeAlerts.map(alert => (
                        <div key={alert.id} className="p-4 bg-gray-100 rounded-lg flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <AlertTriangle className={`w-5 h-5 ${alert.priority === 'High' ? 'text-red-500' : 'text-yellow-500'}`} />
                                <p className="text-gray-700">{alert.text}</p>
                            </div>
                            <Button size="sm">Acknowledge</Button>
                        </div>
                    ))}
                </div>
            </Card>

             {/* Quick Actions */}
             <div className="mt-8">
                <Card>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button variant="secondary">Broadcast Message</Button>
                        <Button variant="secondary">View Crowd Map</Button>
                        <Button variant="secondary">Log Incident</Button>
                        <Button variant="danger">Trigger Emergency</Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default VolunteerDashboard;
