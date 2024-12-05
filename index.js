import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';
import { AuthProvider } from './components/AuthContext'; 


const Main = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

registerRootComponent(Main);
