import React from 'react';

/**
 * A reusable card component for wrapping content.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {string} [props.className] - Additional classes for custom styling.
 * @param {string} [props.title] - An optional title for the card.
 */
const Card = ({ children, className = '', title }) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            {title && (
                <div className="p-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                </div>
            )}
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

export default Card;
