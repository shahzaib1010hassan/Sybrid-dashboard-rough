import AuthenticationImage from "../Pages/Screen/LoginScreen/LoginScreen";
import { Routes, Route } from "react-router-dom";
import { NavbarSimple } from "../Pages/Compnent/Navbar";
import InnerContent from "../Pages/Screen/InnerContent";
import { Navigate } from "react-router-dom";
import DatasetsScreen from "../Pages/Screen/DatasetsScreen";
import ManageDeosScreen from "../Pages/Screen/ManageDeosScreen";
import Home from "../Pages/Screen/ReportNestedScreen/Home";
import About from "../Pages/Screen/ReportNestedScreen/About";
import SettingScreen from "../Pages/Screen/SettingScreen";
import ReportScreen from "../Pages/Screen/ReportScreen";
import { useAuth } from "../Pages/ContextApi/authContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profiledata from "../TemData/profiledata.json";
import RequireAuth from "../Pages/Screen/RequireAuth";
import RequireLogin from "../Pages/Screen/RequireLogin";
import UserInfoIcons from "../Pages/Screen/UserProfile/UserProfileDetails";
function AppRoutes() {
  const { loginByAcessToken, user, setUser, AuthUser } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (AuthUser) {
      //If User have details then he will redirect to Dashboard

      navigate("dashboard");
    } else {
      //If User have no details

      var access_token_local = localStorage.getItem("accesstoken");
      if (access_token_local != undefined) {
        const userProfileData = profiledata.find(
          (user1) => user1.access_token === access_token_local
        );
        if (userProfileData !== undefined) {
          setUser({
            name: userProfileData.usr_fname,
            email: userProfileData.usr_email,
          });
          loginByAcessToken();
          const PathLocation = window.location.pathname.slice(1);
          if (PathLocation === "login") {
            navigate("/dashboard");
          }
        } else {
          navigate("/login");
        }
      } else {
        localStorage.removeItem("Url");
        navigate("/login");
      }
    }
  }, []);

  let UrlPathname = localStorage.getItem("Url");
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="login" />}></Route>
      <Route path="/login" element={<AuthenticationImage />}></Route>
      <Route
        path="/dashboard"
        element={
          <div className="lg:flex bg-lightGrey lg:flex-row">
            <NavbarSimple />
            <InnerContent />
          </div>
        }
      >
        <Route path="/dashboard" element={<Navigate replace to="datasets" />} />
        <Route path="datasets" element={<DatasetsScreen />} />
        <Route path="manageDeos" element={<ManageDeosScreen />} />
        <Route path="setting" element={<SettingScreen />} />
        <Route path="reports" element={<ReportScreen />}>
          <Route
            path="/dashboard/reports"
            element={<Navigate replace to="home" />}
          />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="profile" element={<UserInfoIcons />} />
      </Route>
      )
    </Routes>
  );
}

export default AppRoutes;
