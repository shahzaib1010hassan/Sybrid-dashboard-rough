import { createContext, useContext, useState } from "react";
import profiledata from "../temporaryData/profiledata.json";
import { useHistory, useNavigate } from "react-router-dom";
import { browserHistory, Navigate } from "react-router";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [AuthUser, setAuthUser] = useState(false);
  const [userRole, setuserRole] = useState("");
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
        setuserRole(user1.userDetails.usr_role);
        setAuthUser(true);

        localStorage.setItem("accesstoken", user1.access_token);
        navigate("/dashboard/" + user1.userDetails.usr_role + "/datasets");
      }
    });
  };

  const loginByAcessToken = () => {
    setAuthUser(true);
  };

  function logout() {
    //Clearing Content API User Details

    setAuthUser(false);
    setUser({
      name: "",
      email: "",
    });
    //Removing Access Token
    setuserRole("");
    localStorage.removeItem("accesstoken");
    //Navigate to Login Page
    window.history.pushState({}, undefined, "/login");
    window.location.reload();
  }

  const value = {
    user,
    userRole,
    setuserRole,
    setUser,
    AuthUser,
    setAuthUser,
    loginByAcessToken,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthProvider;
