import React from 'react';
import Card from '../../components/common/Card.jsx';
import Button from '../../components/common/Button.jsx';

const ComplaintManagementPage = () => {
    
    const complaints = [
        { id: 'C-102', subject: 'Sanitation near shoe stand', from: 'devotee@email.com', date: '23 Sep, 2025', status: 'New' },
        { id: 'C-101', subject: 'Long queue for prasad', from: 'another@email.com', date: '22 Sep, 2025', status: 'In Progress' },
        { id: 'C-100', subject: 'Staff behavior', from: 'test@email.com', date: '21 Sep, 2025', status: 'Resolved' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Complaint Management</h1>
                <p className="text-gray-600">Review, assign, and resolve devotee complaints.</p>
            </div>

             <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3">ID</th>
                                <th className="p-3">Subject</th>
                                <th className="p-3">From</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {complaints.map(c => (
                                <tr key={c.id} className="border-b">
                                    <td className="p-3 font-semibold">{c.id}</td>
                                    <td className="p-3">{c.subject}</td>
                                    <td className="p-3">{c.from}</td>
                                    <td className="p-3">{c.date}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                            c.status === 'New' ? 'bg-red-100 text-red-800' : 
                                            c.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                                        }`}>
                                            {c.status}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <Button size="sm">View & Assign</Button>
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

export default ComplaintManagementPage;