import React from 'react';

const HomePage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden -mt-24"> 
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full">
                <iframe
                    className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[56.25vw] transform -translate-x-1/2 -translate-y-1/2"
                    src="https://www.youtube.com/embed/DkAhwmQrlDI?autoplay=1&mute=1&loop=1&playlist=DkAhwmQrlDI&controls=0&showinfo=0&autohide=1&modestbranding=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            </div>

            {/* Content */}
            <main className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-4">
                <h2 className="text-xl md:text-2xl font-light tracking-wider">Shree Somnath Trust</h2>
                <h1 className="text-5xl md:text-8xl font-bold my-2 text-orange-400 drop-shadow-lg">The Aadi Jyotirling</h1>
                <h3 className="text-2xl md:text-4xl font-semibold">Shree Somnath Mahadev</h3>
            </main>
        </div>
    );
};

export default HomePage;