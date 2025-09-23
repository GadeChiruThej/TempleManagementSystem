import React from 'react';
// This is the FIX: I've added 'SearchX' to the list of imported icons.
import { Camera, MapPin, Clock, SearchX } from 'lucide-react';

const FacialRecognitionStatus = ({ timelineData }) => {
    // This check prevents the crash. If there's no data, it shows a helpful message.
    if (!Array.isArray(timelineData) || timelineData.length === 0) {
        return (
            <div className="text-center p-8 bg-gray-800 rounded-lg h-full flex items-center justify-center">
                <div>
                    <SearchX size={48} className="mx-auto text-gray-500 mb-4" />
                    <h3 className="text-xl font-semibold text-white">No Timeline Data</h3>
                    <p className="text-gray-400 mt-2">Select a person from the list to view their last known locations and status updates.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 p-6 rounded-lg h-full overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-6">Real-Time Status Timeline</h3>
            <div className="relative border-l-2 border-orange-500 ml-3">
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-8 ml-8">
                        <div className="absolute -left-4 top-1 flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full">
                            {item.type === 'cctv' ? <Camera size={16} /> : <MapPin size={16} />}
                        </div>
                        <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                            <p className="font-semibold text-orange-400">{item.location}</p>
                            <div className="flex items-center text-sm text-gray-400 mt-1">
                                <Clock size={14} className="mr-2" />
                                <span>{item.time}</span>
                            </div>
                            <p className="text-gray-300 mt-3">{item.status}</p>
                            {item.image && (
                                <div className="mt-4">
                                    <p className="text-xs text-gray-400 mb-2">CCTV CAPTURE</p>
                                    <img src={item.image} alt="CCTV" className="rounded-lg w-full h-auto object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacialRecognitionStatus;