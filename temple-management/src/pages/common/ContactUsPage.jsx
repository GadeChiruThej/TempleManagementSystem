import React from 'react';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const ContactUsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-orange-50">
            <main className="flex-grow py-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-orange-800">Contact Us</h1>
                        <p className="text-lg text-gray-600 mt-2">
                            We're here to help. Reach out to us with your queries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card>
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
                                </div>
                                <div>
                                    <Button type="submit" className="w-full justify-center">Submit</Button>
                                </div>
                            </form>
                        </Card>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
                            <Card>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                                <div className="space-y-3 text-gray-700">
                                    <p><strong>Address:</strong> Shree Somnath Trust, Somnath Patan, Gujarat, India - 362268</p>
                                    <p><strong>Phone:</strong> +91-2876-231200</p>
                                    <p><strong>Email:</strong> info@somnath.org</p>
                                </div>
                            </Card>
                            <Card>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Location</h2>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14910.415687337018!2d70.38280279624554!3d20.888008958036703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bfd329f0417cb75%3A0x2f5a510de9857963!2sShree%20Somnath%20Temple!5e0!3m2!1sen!2sin!4v1758637199157!5m2!1sen!2sin"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}  // ✅ FIXED STYLE
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ContactUsPage;
