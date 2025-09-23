import React from 'react';
import LostItemCard from '../../components/features/LostItemCard.jsx';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ManageLostAndFoundPage = () => {
    const allItems = [
        { id: 'L-012', item: 'Black Wallet', location: 'Prasad Counter', date: '23 Sep, 2025', status: 'Awaiting Collection' },
        { id: 'L-011', item: 'Samsung Smartphone', location: 'Gate 1', date: '22 Sep, 2025', status: 'Returned to Owner' },
        { id: 'L-010', item: 'Set of Keys', location: 'Cloak Room', date: '22 Sep, 2025', status: 'Awaiting Collection' },
        { id: 'L-009', item: 'Child\'s Toy Car', location: 'Main Courtyard', date: '21 Sep, 2025', status: 'Archived' },
    ];
    
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Manage Lost & Found</h1>
                <p className="text-gray-600">Full inventory of all logged items.</p>
            </div>
            
            <Card>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Item Inventory</h2>
                    <input type="text" placeholder="Search by item or ID..." className="p-2 border rounded-md"/>
                </div>
                <div className="space-y-4">
                    {allItems.map(item => <LostItemCard key={item.id} {...item} isAdmin={true} />)}
                </div>
            </Card>
        </div>
    );
};

export default ManageLostAndFoundPage;