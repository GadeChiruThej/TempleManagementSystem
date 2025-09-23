import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { HeartHandshake, Utensils, BookOpen } from 'lucide-react';

const DonationsPage = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-orange-50 min-h-full">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800">Make a Donation</h1>
                    <p className="text-lg text-gray-600 mt-2">Your contribution supports the temple's legacy and services.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Donation Form */}
                    <Card>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Online Donation Form</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                            </div>
                             <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (INR)</label>
                                <input type="number" id="amount" placeholder="e.g., 501" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                            </div>
                            <div>
                                <label htmlFor="pan" className="block text-sm font-medium text-gray-700">PAN Card (Optional)</label>
                                <input type="text" id="pan" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                            </div>
                             <div>
                                <Button type="submit" className="w-full justify-center">Proceed to Pay</Button>
                            </div>
                        </form>
                    </Card>

                    {/* Donation Schemes */}
                    <div className="space-y-6">
                        <Card>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-orange-100 rounded-full"><HeartHandshake className="w-6 h-6 text-orange-600" /></div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">General Fund</h3>
                                    <p className="text-gray-600 mt-1">Contribute to the temple's maintenance, daily rituals, and operational expenses.</p>
                                </div>
                            </div>
                        </Card>
                        <Card>
                           <div className="flex items-start space-x-4">
                                <div className="p-3 bg-orange-100 rounded-full"><Utensils className="w-6 h-6 text-orange-600" /></div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">Annakshetra (Free Meals)</h3>
                                    <p className="text-gray-600 mt-1">Sponsor free, sanctified meals (prasad) for thousands of devotees visiting the temple daily.</p>
                                </div>
                            </div>
                        </Card>
                         <Card>
                           <div className="flex items-start space-x-4">
                                <div className="p-3 bg-orange-100 rounded-full"><BookOpen className="w-6 h-6 text-orange-600" /></div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">E-Library & Research</h3>
                                    <p className="text-gray-600 mt-1">Support the digitization of ancient texts and the development of our spiritual e-library.</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationsPage;