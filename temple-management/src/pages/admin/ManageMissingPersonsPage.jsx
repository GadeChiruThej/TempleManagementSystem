import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ManageMissingPersonsPage = () => {
    
    const cases = [
        { id: 'MP-007', name: 'Ramesh Patel', reported: '10:15 AM', status: 'Active Search' },
        { id: 'MP-006', name: 'Sunita Sharma', reported: 'Yesterday', status: 'Found' },
        { id: 'MP-005', name: 'Unknown Child', reported: '2 days ago', status: 'Handed to Police' },
    ];
    
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Manage Missing Persons</h1>
                <p className="text-gray-600">Oversee and manage all reported cases.</p>
            </div>
            
            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3">Case ID</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Reported At</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cases.map(c => (
                                <tr key={c.id} className="border-b">
                                    <td className="p-3 font-semibold">{c.id}</td>
                                    <td className="p-3">{c.name}</td>
                                    <td className="p-3">{c.reported}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs ${c.status === 'Active Search' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <Button size="sm">View Details</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default ManageMissingPersonsPage;