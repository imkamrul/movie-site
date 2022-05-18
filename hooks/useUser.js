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
    localStorage.setItem("admin", false);
    setAdmin(false);
  };
  useEffect(() => {
    const test = localStorage.getItem("admin");
    if (test === "true") {
      setAdmin(true);
    } else setAdmin(false);
  }, []);
  return {
    login,
    logout,
    admin,
  };
};

export default useUser;
