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
  const getUserRole = localStorage.getItem("userRole");
  const [CurrentUserRole, setCurrentUserRole] = useState(getUserRole);
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
        const Role = user1.userDetails.usr_role.at(0);
        const total_Roles_Number = user1.userDetails.usr_role.length;
        if (total_Roles_Number == 1) {
          setCurrentUserRole(Role);
          localStorage.setItem("userRole", Role !== undefined ? Role : null);
        }

        setAuthUser(true);

        localStorage.setItem("accesstoken", user1.access_token);

        navigate("");
      }
    });
  };

  const AccessTokenChecking = () => {
    var access_token_local = localStorage.getItem("accesstoken");
    if (access_token_local != undefined) {
      const userProfileData = profiledata.find(
        (user1) => user1.access_token === access_token_local
      );
      if (userProfileData !== undefined) {
        setUser({
          name: userProfileData.userDetails.usr_fname,
          email: userProfileData.userDetails.usr_email,
        });
        // setCurrentUserRole(userProfileData.userDetails.usr_role);
        setAuthUser(true);

        const PathLocation = window.location.pathname.slice(1);
        if (PathLocation === "login") {
          setAuthUser(true);
          navigate("/");
        }
      } else {
        setAuthUser(false);
      }
    } else {
      setAuthUser(false);
    }
  };

  function logout() {
    //Clearing Content API User Details

    setAuthUser(false);
    setUser({
      name: "",
      email: "",
    });
    //Removing Access Token

    localStorage.removeItem("accesstoken");
    localStorage.removeItem("userRole");
    //Navigate to Login Page
    window.history.pushState({}, undefined, "/");
    window.location.reload();
  }

  const value = {
    user,
    CurrentUserRole,
    setCurrentUserRole,
    AccessTokenChecking,
    setUser,
    AuthUser,
    setAuthUser,
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
