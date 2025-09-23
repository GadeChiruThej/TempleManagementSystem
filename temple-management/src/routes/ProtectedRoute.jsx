import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';

const ProtectedRoute = ({ requiredRole }) => {
    const { user } = useAuth();

    // This is the FIX. We first check if the 'user' object and 'user.role' exist.
    // If either is missing, we know the user is not properly logged in or authorized.
    if (!user || !user.role) {
        // If they are not logged in, send them to the login page.
        return <Navigate to="/login" replace />;
    }

    // Now that we know the user and their role exist, we can safely check for a match.
    if (user.role !== requiredRole) {
        // If the user's role does not match, they are not authorized.
        // For this prototype, we send them back to the login page.
        return <Navigate to="/login" replace />;
    }

    // If all checks pass, show the page they were trying to access.
    return <Outlet />;
};

export default ProtectedRoute;