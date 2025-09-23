import React from 'react';
import LostItemCard from '../../components/features/LostItemCard';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const LostAndFoundPage = () => {
    
    const foundItems = [
        { id: 'L-012', item: 'Black Wallet', location: 'Prasad Counter', date: '23 Sep, 2025', status: 'Awaiting Collection' },
        { id: 'L-011', item: 'Samsung Smartphone', location: 'Gate 1', date: '22 Sep, 2025', status: 'Returned to Owner' },
        { id: 'L-010', item: 'Set of Keys', location: 'Cloak Room', date: '22 Sep, 2025', status: 'Awaiting Collection' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Lost & Found Items</h1>
                <p className="text-gray-600">Manage items reported as lost or found within the temple premises.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Add New Item Form */}
                <div className="lg:col-span-1">
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Log New Item</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Item Description</label>
                                <input type="text" placeholder="e.g., Red Backpack" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location Found</label>
                                <input type="text" placeholder="e.g., Near Shoe Stand" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
                            </div>
                            <Button className="w-full justify-center">Add Item to Log</Button>
                        </form>
                    </Card>
                </div>

                {/* Found Items List */}
                <div className="lg:col-span-2 space-y-6">
                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Recently Found Items</h2>
                    {foundItems.map(item => <LostItemCard key={item.id} {...item} />)}
                </div>
            </div>
        </div>
    );
};

export default LostAndFoundPage;