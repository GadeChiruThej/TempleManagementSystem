import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Card from '../../components/common/Card';

const TempleTimingsPage = () => {

    const timings = [
        {
            title: "Darshan Timings",
            schedule: [
                { time: "07:30 AM to 01:30 PM", label: "Morning Session" },
                { time: "02:30 PM to 06:30 PM", label: "Afternoon Session" },
                { time: "07:30 PM to 10:00 PM", label: "Evening Session" },
            ],
            icon: "🙏"
        },
        {
            title: "Aarti Timings",
            schedule: [
                { time: "07:00 AM", label: "Pratah Aarti (Morning)" },
                { time: "12:00 PM", label: "Madhyahan Aarti (Noon)" },
                { time: "07:00 PM", label: "Sayam Aarti (Evening)" },
            ],
            icon: "🔥"
        },
        {
            title: "Light & Sound Show",
            schedule: [
                { time: "08:00 PM to 09:00 PM", label: "Show Timings" },
            ],
            note: "Except during monsoon season.",
            icon: "✨"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
           
            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800">Temple Timings</h1>
                    <p className="text-lg text-gray-600 mt-2">Plan your visit to Shree Somnath Jyotirling Temple.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {timings.map((section, index) => (
                        <Card key={index} className="flex flex-col">
                            <div className="flex-grow">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                    <span className="text-3xl mr-3">{section.icon}</span> {section.title}
                                </h2>
                                <ul className="space-y-3 text-gray-700">
                                    {section.schedule.map((item, i) => (
                                        <li key={i} className="flex justify-between border-b pb-2">
                                            <span>{item.label}</span>
                                            <span className="font-semibold">{item.time}</span>
                                        </li>
                                    ))}
                                </ul>
                                {section.note && (
                                     <p className="text-xs text-gray-500 mt-4">{section.note}</p>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        
        </div>
    );
};

export default TempleTimingsPage;

