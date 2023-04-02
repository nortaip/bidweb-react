import React from 'react';

const AuthContext = React.createContext({
    isAuthenticated: false,
    userId: null,
});

export default AuthContext;
