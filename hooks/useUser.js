import React, { useEffect, useState } from "react";

const useUser = () => {
  const [admin, setAdmin] = useState(false);

  const login = (email, password) => {
    if (email === process.env.EMAIL && password === process.env.PASSWORD) {
      setAdmin(true);
      localStorage.setItem("admin", true);

      return true;
    } else {
      return false;
    }
  };
  const logout = () => {
    setAdmin(false);
    localStorage.setItem("admin", false);
  };
  useEffect(() => {
    setAdmin(localStorage.getItem("admin"));
  }, []);
  return {
    login,
    logout,
    admin,
  };
};

export default useUser;
