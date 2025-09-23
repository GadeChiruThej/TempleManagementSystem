import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Siren, HeartPulse, ShieldAlert, User } from 'lucide-react';

const EmergencyControlPanel = () => {

    const activeIncidents = [
        { id: 'M-01', type: 'Medical', location: 'Near Prasad Counter', status: 'Team Dispatched' },
        { id: 'S-04', type: 'Security', location: 'Gate 2', status: 'Monitoring' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-red-50 min-h-full">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-red-800 flex items-center justify-center">
                    <Siren className="w-10 h-10 mr-4" /> Emergency Control Panel
                </h1>
                <p className="text-red-600 mt-2">Use with extreme caution. Actions are logged and monitored.</p>
            </div>

            {/* Quick Trigger Buttons */}
            <Card className="bg-white/70 backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Trigger New Alert</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button variant="danger" className="h-24 text-lg flex-col"><HeartPulse className="w-8 h-8 mb-2"/> Medical</Button>
                    <Button variant="danger" className="h-24 text-lg flex-col"><ShieldAlert className="w-8 h-8 mb-2"/> Security</Button>
                    <Button variant="danger" className="h-24 text-lg flex-col"><User className="w-8 h-8 mb-2"/> Missing Person</Button>
                    <Button variant="warning" className="h-24 text-lg flex-col"><Siren className="w-8 h-8 mb-2"/> General Alarm</Button>
                </div>
            </Card>

            {/* Active Incidents */}
            <div className="mt-8">
                 <Card className="bg-white/70 backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Incidents</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3">ID</th>
                                    <th className="p-3">Type</th>
                                    <th className="p-3">Location</th>
                                    <th className="p-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activeIncidents.map(incident => (
                                    <tr key={incident.id} className="border-b">
                                        <td className="p-3 font-semibold">{incident.id}</td>
                                        <td className="p-3">{incident.type}</td>
                                        <td className="p-3">{incident.location}</td>
                                        <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">{incident.status}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default EmergencyControlPanel;
