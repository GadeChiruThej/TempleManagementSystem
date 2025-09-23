import React from 'react';
import Card from '../../components/common/Card';
import { TrendingUp, Cloudy, Calendar } from 'lucide-react';

const CrowdPredictionPage = () => {

    const predictions = [
        { time: 'Next 1 Hr', prediction: '~1,800', change: '+20%', color: 'text-red-500' },
        { time: 'Next 3 Hrs', prediction: '~2,200', change: '+45%', color: 'text-red-600' },
        { time: 'End of Day', prediction: '~1,200', change: '-20%', color: 'text-green-500' },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
             <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800">AI Crowd Prediction</h1>
                <p className="text-gray-600">Forecasted visitor counts based on our predictive model.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="flex items-center space-x-4">
                    <Calendar className="w-8 h-8 text-orange-500"/>
                    <div>
                        <p className="font-bold text-lg">Today: Tuesday</p>
                        <p className="text-sm text-gray-600">Non-festival day</p>
                    </div>
                </Card>
                 <Card className="flex items-center space-x-4">
                    <Cloudy className="w-8 h-8 text-blue-500"/>
                    <div>
                        <p className="font-bold text-lg">Weather: Clear</p>
                        <p className="text-sm text-gray-600">28°C, low impact</p>
                    </div>
                </Card>
                 <Card className="flex items-center space-x-4">
                    <TrendingUp className="w-8 h-8 text-green-500"/>
                    <div>
                        <p className="font-bold text-lg">Model Confidence</p>
                        <p className="text-sm text-gray-600">94.5% Accuracy</p>
                    </div>
                </Card>
            </div>

            <Card>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Predictions for Today</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    {predictions.map(p => (
                        <div key={p.time} className="p-6 bg-gray-100 rounded-lg">
                            <p className="text-gray-600 font-semibold">{p.time}</p>
                            <p className="text-4xl font-bold my-2">{p.prediction}</p>
                            <p className={`font-bold ${p.color}`}>{p.change}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default CrowdPredictionPage;