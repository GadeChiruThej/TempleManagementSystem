import React from 'react';

/**
 * A reusable button component.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className] - Additional classes for custom styling.
 * @param {'primary' | 'secondary'} [props.variant='primary'] - The button style variant.
 * @param {string} [props.type='button'] - The button's type attribute.
 */
const Button = ({ children, onClick, className = '', variant = 'primary', type = 'button' }) => {
    const baseStyle = 'px-6 py-2 font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:scale-105';
    
    const variantStyles = {
        primary: 'bg-orange-600 text-white hover:bg-orange-700 focus:ring-orange-500',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variantStyles[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
