import React, { useContext } from 'react';
import { adminDataContext } from '../context/AdminContext';

function Home() {
  const { logOut, adminData } = useContext(adminDataContext);

  return (
    <div>
      <h1>Welcome, {adminData?.email}</h1>
      <button 
        onClick={logOut} 
        style={{ background: 'red', color: 'white', padding: '10px' }}
      >
        Logout
      </button>
    </div>
  );
}

export default Home