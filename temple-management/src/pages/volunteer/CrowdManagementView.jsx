import React from 'react';
import CrowdChart from '../../components/features/CrowdChart.jsx';
import Card from '../../components/common/Card.jsx';
import Button from '../../components/common/Button.jsx';
import StatCard from '../../components/dashboard/StatCard.jsx';
import { Users, ArrowRightLeft, Clock } from 'lucide-react';

const CrowdManagementView = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
             <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Real-Time Crowd Management</h1>
                <p className="text-gray-600">Monitor and manage devotee flow across the temple premises.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Est. Crowd Count" value="~1,500" icon={<Users className="w-8 h-8 text-white"/>} />
                <StatCard title="Flow Rate" value="120/min" icon={<ArrowRightLeft className="w-8 h-8 text-white"/>} />
                <StatCard title="Avg. Wait Time" value="25 mins" icon={<Clock className="w-8 h-8 text-white"/>} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Crowd Chart */}
                <div className="lg:col-span-2">
                    <Card>
                         <h2 className="text-2xl font-bold text-gray-800 mb-6">Crowd Density by Zone</h2>
                         <CrowdChart />
                    </Card>
                </div>

                {/* Control Panel */}
                <Card>
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Control Actions</h2>
                     <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Send Alert to Zone</label>
                            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500">
                                <option>Gate 1 (Entry)</option>
                                <option>Main Sanctum</option>
                                <option>Prasad Counter</option>
                                <option>Gate 4 (Exit)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea rows="3" placeholder="e.g., Temporarily hold the queue." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
                        </div>
                        <Button className="w-full justify-center">Dispatch Alert</Button>
                        <Button variant="secondary" className="w-full justify-center">Open Emergency Exit Gate 5</Button>
                     </div>
                </Card>
            </div>
        </div>
    );
};

export default CrowdManagementView;