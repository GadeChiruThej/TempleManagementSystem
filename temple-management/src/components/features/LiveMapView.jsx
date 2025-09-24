import React, { useState, useEffect } from 'react';
import { Wifi, Users, ShieldAlert, TrafficCone, UserCheck, Siren } from 'lucide-react';

// Data for our simulated live events
const liveEvents = [
    { id: 1, type: 'crowd', level: 'high', location: 'Main Entrance Gate', details: 'Heavy crowd density detected.', pos: { top: '45%', left: '55%' } },
    { id: 2, type: 'crowd', level: 'low', location: 'Prasad Counter 2', details: 'Normal crowd flow.', pos: { top: '52%', left: '48%' } },
    { id: 3, type: 'traffic', level: 'moderate', location: 'East Parking Access Road', details: 'Slow vehicle movement.', pos: { top: '65%', left: '75%' } },
    { id: 4, type: 'safety', level: 'alert', location: 'Old Temple Complex', details: 'Medical emergency reported.', pos: { top: '30%', left: '40%' } },
    { id: 5, type: 'volunteer', location: 'Volunteer #14', details: 'Patrolling near West Gate.', pos: { top: '50%', left: '30%' } },
    { id: 6, type: 'volunteer', location: 'Volunteer #22', details: 'Assisting at Medical Tent.', pos: { top: '32%', left: '42%' } },
];

const LiveMapView = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const getIcon = (event) => {
        switch (event.type) {
            case 'crowd': return <Users size={18} />;
            case 'traffic': return <TrafficCone size={18} />;
            case 'safety': return <Siren size={18} />;
            case 'volunteer': return <UserCheck size={18} />;
            default: return null;
        }
    };

    const getEventColor = (event) => {
        if (event.type === 'safety') return 'bg-red-500 text-white';
        if (event.level === 'high') return 'bg-red-500 text-white';
        if (event.level === 'moderate') return 'bg-yellow-500 text-black';
        if (event.type === 'volunteer') return 'bg-blue-500 text-white';
        return 'bg-green-500 text-white';
    };

    const getHeatmapColor = (level) => {
        if (level === 'high') return 'bg-red-500/50 border-red-400';
        if (level === 'moderate') return 'bg-yellow-500/50 border-yellow-400';
        return 'bg-green-500/50 border-green-400';
    };

    return (
        <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)] gap-4 p-4 bg-gray-900 text-white">
            {/* Left Panel: Situation Board */}
            <div className="lg:w-1/3 xl:w-1/4 bg-gray-800 rounded-lg p-4 flex flex-col shadow-lg">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-3">
                    <h2 className="text-xl font-bold">Situation Board</h2>
                    <div className="flex items-center text-green-400">
                        <Wifi size={16} className="mr-2" />
                        <span className="text-sm font-semibold">LIVE</span>
                    </div>
                </div>
                <div className="text-center mb-4">
                    <p className="text-4xl font-mono">{time.toLocaleTimeString()}</p>
                    <p className="text-sm text-gray-400">{time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div className="flex-grow overflow-y-auto space-y-3">
                    {liveEvents.map(event => (
                        <div key={event.id} className={`p-3 rounded-lg flex items-start ${getEventColor(event)}`}>
                            <div className="flex-shrink-0 mt-1 mr-3">{getIcon(event)}</div>
                            <div>
                                <p className="font-bold">{event.location}</p>
                                <p className="text-sm">{event.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Panel: Interactive Map */}
            <div className="flex-grow bg-gray-800 rounded-lg shadow-lg overflow-hidden relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14897.45339241979!2d70.3848778404289!3d20.9056157121287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd328b9ce28aeb%3A0x6d2efaa0d9eda083!2sSomnath%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715880318236!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Map Overlays */}
                {liveEvents.map(event => (
                     <div key={`pin-${event.id}`} className="absolute" style={{ top: event.pos.top, left: event.pos.left, transform: 'translate(-50%, -50%)' }}>
                        {event.type === 'crowd' && (
                            <div className={`w-24 h-24 rounded-full animate-pulse ${getHeatmapColor(event.level)}`}></div>
                        )}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-2 rounded-full shadow-xl ${getEventColor(event)}`}>
                           {getIcon(event)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LiveMapView;