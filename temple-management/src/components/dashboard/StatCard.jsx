import React from 'react';

/**
 * A reusable card for displaying a single statistic.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.icon - An icon component to display.
 * @param {string} props.title - The title of the statistic.
 * @param {string | number} props.value - The value of the statistic.
 * @param {string} [props.className] - Additional classes for card styling.
 */
const StatCard = ({ icon, title, value, className = '' }) => {
    return (
        <div className={`bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 ${className}`}>
            <div className="bg-orange-100 p-3 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
