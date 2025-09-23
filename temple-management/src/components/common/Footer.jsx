import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-orange-900 text-white">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-orange-600 inline-block">About Shree Somnath Trust</h4>
                        <p className="text-sm text-orange-200">
                            The Shree Somnath Trust is dedicated to maintaining and developing the holy site of Somnath, ensuring a safe, spiritual, and memorable experience for all pilgrims.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-orange-600 inline-block">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="/live-darshan" className="hover:text-yellow-300 transition-colors">Live Darshan</a></li>
                            <li><a href="/donation" className="hover:text-yellow-300 transition-colors">Online Donation</a></li>
                            <li><a href="/room-booking" className="hover:text-yellow-300 transition-colors">Room Booking</a></li>
                            <li><a href="/events" className="hover:text-yellow-300 transition-colors">Upcoming Events</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-orange-600 inline-block">Contact Us</h4>
                        <address className="text-sm text-orange-200 not-italic">
                            Shree Somnath Trust,<br />
                            Prabhas Patan, Veraval,<br />
                            Gujarat 362268, India.<br />
                            <strong className="text-white">Phone:</strong> +91-2876-231200<br />
                            <strong className="text-white">Email:</strong> contact@somnath.org
                        </address>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 border-b-2 border-orange-600 inline-block">Follow Us</h4>
                        <div className="flex space-x-4">
                            {/* Replace with actual social icons later */}
                            <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">FB</a>
                            <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">TW</a>
                            <a href="#" className="text-2xl hover:text-yellow-400 transition-colors">IG</a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright Bar */}
            <div className="bg-orange-950 py-4">
                <div className="container mx-auto px-6 text-center text-sm text-orange-300">
                    &copy; {new Date().getFullYear()} Shree Somnath Trust. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
