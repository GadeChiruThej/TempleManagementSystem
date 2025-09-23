import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ComplaintSystemPage = () => {
    
    const pastComplaints = [
        { id: '#1024', subject: 'Cleanliness issue near Guest House B', status: 'In Progress', date: '20 Sep, 2025' },
        { id: '#1018', subject: 'Delayed entry despite booking', status: 'Resolved', date: '15 Aug, 2025' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-orange-50 min-h-full">
            <div className="container mx-auto">
                 <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800">Feedback & Complaints</h1>
                    <p className="text-lg text-gray-600 mt-2">Help us improve your experience. Share your valuable feedback.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* New Complaint Form */}
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Register a New Complaint</h2>
                        <form className="space-y-4">
                             <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" id="subject" placeholder="e.g., Regarding room service" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                            </div>
                             <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Detailed Description</label>
                                <textarea id="description" rows="5" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
                            </div>
                             <div>
                                <Button type="submit" className="w-full justify-center">Submit Complaint</Button>
                            </div>
                        </form>
                    </Card>

                    {/* Past Complaints */}
                    <div className="space-y-6">
                         <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Past Complaints</h2>
                         {pastComplaints.map(complaint => (
                             <Card key={complaint.id}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-500">{complaint.id} - {complaint.date}</p>
                                        <h3 className="text-lg font-bold text-gray-800 mt-1">{complaint.subject}</h3>
                                    </div>
                                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${complaint.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                        {complaint.status}
                                    </span>
                                </div>
                             </Card>
                         ))}
                         {pastComplaints.length === 0 && (
                            <Card>
                                <p className="text-center text-gray-500">You have not registered any complaints yet.</p>
                            </Card>
                         )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplaintSystemPage;
