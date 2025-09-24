import React, { useState, useEffect } from 'react';
import { AlertCircle, Users, Car, TrafficCone } from 'lucide-react';

// This component represents a single CCTV feed with its AI overlay
const CctvFeed = ({ title, videoSrc, analysisType }) => {
    const [count, setCount] = useState(0);
    const [boxes, setBoxes] = useState([]);

    // This effect simulates the AI by updating the data every few seconds
    useEffect(() => {
        const interval = setInterval(() => {
            if (analysisType === 'heavy-crowd') {
                const newCount = Math.floor(150 + Math.random() * 50);
                setCount(newCount);
                // Generate random bounding boxes for people
                setBoxes(
                    Array.from({ length: 15 }).map(() => ({
                        top: `${Math.random() * 70 + 15}%`,
                        left: `${Math.random() * 80 + 10}%`,
                        width: '2rem', // smaller box for a person
                        height: '2.5rem',
                        borderColor: 'border-red-500'
                    }))
                );
            } else if (analysisType === 'traffic') {
                const newCount = Math.floor(10 + Math.random() * 10);
                setCount(newCount);
                 // Generate random bounding boxes for vehicles
                 setBoxes(
                    Array.from({ length: 5 }).map(() => ({
                        top: `${Math.random() * 60 + 20}%`,
                        left: `${Math.random() * 70 + 15}%`,
                        width: '4rem', // larger box for a vehicle
                        height: '3rem',
                        borderColor: 'border-yellow-400'
                    }))
                );
            }
        }, 3000); // Update every 3 seconds

        return () => clearInterval(interval);
    }, [analysisType]);

    const getStatus = () => {
        if (analysisType === 'heavy-crowd') return { text: `HIGH DENSITY (${count})`, color: 'bg-red-500' };
        if (analysisType === 'safe-crowd') return { text: 'LOW DENSITY', color: 'bg-green-500' };
        if (analysisType === 'traffic') return { text: `MODERATE TRAFFIC (${count})`, color: 'bg-yellow-500' };
        return { text: 'NORMAL', color: 'bg-blue-500' };
    };

    const { text, color } = getStatus();

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col">
            <div className="p-3 bg-gray-900 flex justify-between items-center">
                <h3 className="font-bold text-white">{title}</h3>
                <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${color}`}>{text}</span>
            </div>
            <div className="relative w-full aspect-video">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`${videoSrc}?autoplay=1&mute=1&loop=1&playlist=${videoSrc.split('/').pop().split('?')[0]}&controls=0&showinfo=0`}
                    title={title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
                {/* AI Overlay */}
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        className={`absolute ${box.borderColor} bg-opacity-20`}
                        style={{ top: box.top, left: box.left, width: box.width, height: box.height, transition: 'all 0.5s ease', backgroundColor: box.borderColor === 'border-red-500' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(250, 204, 21, 0.2)' }}
                    ></div>
                ))}
            </div>
        </div>
    );
};


// The main component that lays out all feeds and the alert panel
const CctvSurveillance = () => {
    const alerts = [
        { id: 1, time: '07:30 AM', message: 'High crowd density detected at Main Gate.', level: 'critical', icon: <Users /> },
        { id: 2, time: '07:28 AM', message: 'Static vehicle GJ01-AB-1234 detected in no-parking zone for >5 mins.', level: 'warning', icon: <Car /> },
        { id: 3, time: '07:25 AM', message: 'Moderate traffic flow observed at Gate 3.', level: 'info', icon: <TrafficCone /> },
    ];

    const getAlertColor = (level) => {
        if (level === 'critical') return 'border-red-500';
        if (level === 'warning') return 'border-yellow-500';
        return 'border-blue-400';
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
            {/* Feeds Section */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <CctvFeed title="CCTV 01: Main Gate (Crowd)" videoSrc="https://www.youtube.com/embed/My9MVZd7ABs" analysisType="heavy-crowd" />
                <CctvFeed title="CCTV 02: Temple Exit (Crowd)" videoSrc="https://www.youtube.com/embed/dtqTt9Kzj64" analysisType="safe-crowd" />
                <CctvFeed title="CCTV 03: Gate 3 (Traffic)" videoSrc="https://www.youtube.com/embed/iEIk3RpV6RA" analysisType="traffic" />
                <CctvFeed title="CCTV 04: Parking Area (Traffic)" videoSrc="https://www.youtube.com/embed/FdOrPosxbFU" analysisType="traffic" />
            </div>

            {/* Alerts Panel */}
            <div className="lg:col-span-1 bg-gray-800 p-4 rounded-lg flex flex-col">
                <div className="flex items-center mb-4">
                    <AlertCircle className="text-red-400 mr-3" size={28} />
                    <h2 className="text-2xl font-bold text-white">Live AI Alerts</h2>
                </div>
                <div className="space-y-4 overflow-y-auto">
                    {alerts.map(alert => (
                        <div key={alert.id} className={`p-4 bg-gray-700 rounded-lg border-l-4 ${getAlertColor(alert.level)}`}>
                            <div className="flex items-start">
                                <div className="mr-3 pt-1">{alert.icon}</div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{alert.message}</p>
                                    <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CctvSurveillance;