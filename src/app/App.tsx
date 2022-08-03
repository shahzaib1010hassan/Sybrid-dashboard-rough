import "./App.css";
import { useAuth } from "../context/authContext";
import Authorized from "../routes/authorizedApp/Authorized";
import Unauthorized from "../routes/unauthorizedApp/Unauthorized";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import profiledata from "../temporaryData/profiledata.json";

function App() {
  const {
    loginByAcessToken,
    user,
    setUser,
    setAuthUser,
    AuthUser,
    userRole,
    setuserRole,
  } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(userRole);
    if (AuthUser) {
      //If User have details then he will redirect to Dashboard
      setAuthUser(true);
    } else {
      //If User have no details

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
          setuserRole(userProfileData.userDetails.usr_role);
          setAuthUser(true);
          console.log(userRole);
          const PathLocation = window.location.pathname.slice(1);
          if (PathLocation === "login") {
            setAuthUser(true);
            navigate(
              "/dashboard/" + userProfileData.userDetails.usr_role + "/datasets"
            );
          }
        } else {
          setAuthUser(false);
        }
      } else {
        setAuthUser(false);
      }
    }
  }, []);
  console.log("User islogin:", AuthUser);
  return (
    <div className="App">{AuthUser ? <Authorized /> : <Unauthorized />}</div>
  );
}

export default App;
