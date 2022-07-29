import { createContext, useContext, useState } from "react";
import profiledata from "../../TemData/profiledata.json";

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
    console.log("I am in authContext in login ");
    profiledata.map((user) => {
      if (user.usr_email == email && user.usr_mobile == password) {
        setUser({
          name: user.usr_fname,
          email: user.usr_email,
        });
        setAuthUser(true);

        localStorage.setItem(
          "accesstoken",
          "643024e8-a7fb-4f5b-b429-c00d0399ee15"
        );

        navigate("/dashboard");
      }
    });
  };

  const loginByAcessToken = () => {
    setAuthUser(true);
   
  };

  const logout = () => {
    //Clearing Content API User Details

    setAuthUser(false);
    setUser({
      name: "",
      email: "",
    });
    //Removing Access Token

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
