import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { adminDataContext } from './context/AdminContext'; // Ensure this path is correct
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Grab adminData from your Context
  const { adminData } = useContext(adminDataContext);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      
      {/* 
        LOGIC CHECK: 
        If adminData is null, undefined, or false, show Login.
        If adminData has a value (email/role), show Home.
      */}
      {!adminData ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* If not logged in, any random URL (*) sends them to Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <div className="admin-layout">
          {/* Add your Sidebar here if needed */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* If logged in, redirect them away from /login back to home */}
            <Route path="/login" element={<Navigate to="/" replace />} />
            {/* Catch-all for logged-in users */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
