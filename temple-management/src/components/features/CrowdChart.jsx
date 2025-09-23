import React from 'react';
import Card from '../common/Card.jsx';

const CrowdChart = ({ title, data, color }) => {

    // FIX: This check prevents the crash.
    // If 'data' is not a valid list, we show a helpful message instead.
    if (!Array.isArray(data) || data.length === 0) {
        return (
            <Card>
                <h3 className="text-lg font-semibold text-gray-200 mb-4">{title}</h3>
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500">No data available to display.</p>
                </div>
            </Card>
        );
    }

    // The rest of the code will only run if data exists.
    const maxValue = Math.max(...data.map(item => item.value), 1); // Added 1 to prevent division by zero

    return (
        <Card>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">{title}</h3>
            <div className="flex justify-around items-end h-64 space-x-2">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                        <div
                            className="w-full rounded-t-md transition-all duration-500"
                            style={{
                                height: `${(item.value / maxValue) * 100}%`,
                                backgroundColor: color || '#fb923c', // Default orange color
                            }}
                            title={`${item.label}: ${item.value}`}
                        ></div>
                        <span className="text-xs text-gray-400 mt-2">{item.label}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default CrowdChart;