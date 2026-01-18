import React, { createContext, useContext, useEffect, useState } from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

export const adminDataContext = createContext();

function AdminContext({ children }) {
  let [adminData, setAdminData] = useState(null);
  let { serverUrl } = useContext(authDataContext);

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/admin/getadmin", {
        withCredentials: true,
      });
      setAdminData(result.data);
    } catch (error) {
      setAdminData(null);
    }
  };

  // ADD THIS LOGOUT FUNCTION
  const logOut = async () => {
    try {
      // 1. Tell Backend to clear the cookie
      await axios.get(serverUrl + "/api/admin/logout", { withCredentials: true });
      
      // 2. Clear local state
      setAdminData(null);
      toast.success("Logged out successfully");
    } catch (error) {
      // Fallback: Clear state even if network fails
      setAdminData(null);
      console.log("Logout error", error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  let value = {
    adminData,
    setAdminData,
    getAdmin,
    logOut, // Export logout function
  };

  return (
    <adminDataContext.Provider value={value}>
      {children}
    </adminDataContext.Provider>
  );
}

export default AdminContext;
