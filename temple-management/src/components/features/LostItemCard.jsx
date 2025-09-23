import React from 'react';
import Button from '../common/Button.jsx';

/**
 * A card component to display details of a lost or found item.
 * @param {object} props - Component props.
 * @param {string} props.imageUrl - URL of the item's image.
 * @param {string} props.itemName - Name of the item.
 * @param {string} props.description - Brief description of the item.
 * @param {string} props.date - Date the item was reported/found.
 * @param {'Claimed' | 'In Custody' | 'Unclaimed'} props.status - The current status of the item.
 */
const LostItemCard = ({ imageUrl, itemName, description, date, status }) => {
    const statusStyles = {
        'Claimed': 'bg-green-100 text-green-800',
        'In Custody': 'bg-blue-100 text-blue-800',
        'Unclaimed': 'bg-yellow-100 text-yellow-800',
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
            <img className="w-full md:w-1/3 h-48 md:h-auto object-cover" src={imageUrl} alt={itemName} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/f8b400/FFF?text=Item'; }}/>
            <div className="p-6 flex flex-col justify-between w-full">
                <div>
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-gray-800">{itemName}</h3>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[status]}`}>
                            {status}
                        </span>
                    </div>
                    <p className="text-gray-600 mt-2">{description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500">Found on: {date}</p>
                    {status !== 'Claimed' && <Button>Claim Item</Button>}
                </div>
            </div>
        </div>
    );
};

export default LostItemCard;