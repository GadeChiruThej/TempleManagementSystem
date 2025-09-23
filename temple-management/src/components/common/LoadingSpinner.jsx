import React from 'react';

/**
 * A simple loading spinner component.
 */
const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-600"></div>
        </div>
    );
};

export default LoadingSpinner;