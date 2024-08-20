import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    console.log("ProtectedRoutes component rendered");

    // Function to get a specific cookie by name
    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    // Check for the presence of the JWT cookie
    const token = getCookie('jwt');

    console.log("JWT token:", token);

    if (token) {
        return children;
    } else {
        console.log("No token found, redirecting to login");
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoutes;
