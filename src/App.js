import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard1';
import Login from './components/login/LoginComponent';
import Registration from './components/registration/Registration1';
import Home from './components/home/Home1';
import AuthProvider from './components/auth/AuthContext';

function App() {
  return (   
    <AuthProvider>  
    <Router>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
