import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null); // No token initially

  const login = (token) => setAuthToken(token); // Set token after successful login
  const logout = () => setAuthToken(null); // Clear token when logging out

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
