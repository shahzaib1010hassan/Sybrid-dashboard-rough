import { createContext, useContext, useState } from "react";
import profiledata from "../temporaryData/profiledata.json";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [AuthUser, setAuthUser] = useState(false);

  const login = (email, password) => {
    profiledata.map((user1) => {
      if (
        user1.userDetails.usr_email == email &&
        user1.userDetails.usr_password == password
      ) {
        setUser({
          name: user1.userDetails.usr_fname,
          email: user1.userDetails.usr_email,
        });
        setAuthUser(true);

        localStorage.setItem("accesstoken", user1.access_token);

        navigate("/dashboard");
      }
    });
  };

  const loginByAcessToken = () => {
    console.log("login by access token");
    setAuthUser(true);
  };

  const logout = () => {
    //Clearing Content API User Details
    console.log("I am in logout");
    setAuthUser(false);
    setUser({
      name: "",
      email: "",
    });
    //Removing Access Token
    localStorage.removeItem("accesstoken");
    //Navigate to Login Page
    navigate("/login");
  };

  const value = { user, setUser, AuthUser, loginByAcessToken, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
