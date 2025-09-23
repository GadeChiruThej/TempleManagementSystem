import React from 'react';
import Button from '../common/Button.jsx';

/**
 * A generic booking form for services like Darshan or Room booking.
 * @param {object} props - Component props.
 * @param {'Darshan' | 'Room'} props.bookingType - The type of booking.
 * @param {Function} props.onSubmit - Function to call on form submission.
 */
const BookingForm = ({ bookingType, onSubmit }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would gather form data here
        console.log("Form submitted for", bookingType);
        if (onSubmit) {
            onSubmit();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700">Select Date</label>
                <input type="date" id="bookingDate" name="bookingDate" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>
            <div>
                <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700">Number of Devotees/Guests</label>
                <input type="number" id="numberOfPeople" name="numberOfPeople" min="1" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm" />
            </div>

            {bookingType === 'Room' && (
                <div>
                    <label htmlFor="roomType" className="block text-sm font-medium text-gray-700">Room Type</label>
                    <select id="roomType" name="roomType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md">
                        <option>Standard Non-AC</option>
                        <option>Deluxe AC</option>
                        <option>Family Suite</option>
                    </select>
                </div>
            )}
             <div>
                <Button type="submit" className="w-full justify-center">
                    Proceed to Book {bookingType}
                </Button>
            </div>
        </form>
    );
};

export default BookingForm;

