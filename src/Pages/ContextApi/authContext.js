import React, { createContext, useContext, useState } from "react";
import profiledata from "../../TemData/profiledata.json";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const login = (email, password) => {
    profiledata.map((user) => {
      if (user.usr_email == email && user.usr_mobile == password) {
        setUser({
          name: "shahzaib",
          email: "hassanshahzaib81@gmail.com",
        });
        navigate("dashboard");
      }
    });
  };

  const logout = () => {
    navigate("login");
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
