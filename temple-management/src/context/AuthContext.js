import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // Rule: Password must be the same as the username for this prototype
        if (username !== password) {
            return { success: false, message: "Invalid username or password." };
        }

        let userRole = null;
        const lowerCaseUsername = username.toLowerCase();

        // Check for Admin role
        if (['admin1', 'admin2', 'admin3'].includes(lowerCaseUsername)) {
            userRole = 'admin';
        } 
        // Check for Volunteer role (from volunteer1 to volunteer100)
        else if (lowerCaseUsername.startsWith('volunteer')) {
            const volunteerNumber = parseInt(lowerCaseUsername.replace('volunteer', ''), 10);
            if (volunteerNumber >= 1 && volunteerNumber <= 100) {
                userRole = 'volunteer';
            }
        }

        if (userRole) {
            setUser({ name: username, role: userRole });
            return { success: true, role: userRole };
        }

        return { success: false, message: "Invalid username or password." };
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to easily use the auth context in other components
export const useAuth = () => {
    return useContext(AuthContext);
};