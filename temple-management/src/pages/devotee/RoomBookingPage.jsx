import React from 'react';
import BookingForm from '../../components/features/BookingForm';
import Card from '../../components/common/Card';

const RoomBookingPage = () => {

    const rooms = [
        { name: 'Standard Non-AC Room', capacity: '2 Adults', price: '₹800/night', image: 'https://placehold.co/600x400/f8a75a/4a2e0a?text=Standard+Room' },
        { name: 'Deluxe AC Room', capacity: '2 Adults, 1 Child', price: '₹1500/night', image: 'https://placehold.co/600x400/f8a75a/4a2e0a?text=Deluxe+Room' },
        { name: 'Family Suite', capacity: '4 Adults', price: '₹2500/night', image: 'https://placehold.co/600x400/f8a75a/4a2e0a?text=Family+Suite' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-orange-50 min-h-full">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800">Guest House Booking</h1>
                    <p className="text-lg text-gray-600 mt-2">Stay comfortably at our trust-managed guest houses.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {rooms.map(room => (
                        <Card key={room.name} className="p-0 overflow-hidden">
                            <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                                <p className="text-gray-600 mt-2">Capacity: {room.capacity}</p>
                                <p className="text-lg font-semibold text-orange-700 mt-2">{room.price}</p>
                            </div>
                        </Card>
                    ))}
                </div>
                
                <Card>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserve Your Stay</h2>
                    <div className="max-w-xl mx-auto">
                         <BookingForm formType="Room" />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default RoomBookingPage;