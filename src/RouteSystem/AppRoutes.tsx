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
function AppRoutes() {
  const { loginByAcessToken, user, setUser, AuthUser } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (user.name !== "" && user.email !== "") {
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
          //setting User details
          setUser({
            name: userProfileData.usr_fname,
            email: userProfileData.usr_email,
          });
          //log into Dashboard

          loginByAcessToken();
          console.log("Access Token Matched !");

          //Moving to LoginScreen
        } else {
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    }
  }, []);
  let UrlPathname = localStorage.getItem("Url");
  console.log("I am in routes", UrlPathname);
  return (
    <Routes>
      <Route
        path="/"
        element={
          AuthUser === false ? (
            <Navigate replace to="login" />
          ) : (
            <Navigate
              replace
              to={UrlPathname != null ? UrlPathname : "/dashboard"}
            />
          )
        }
      ></Route>
      <Route
        path="/login"
        element={
          AuthUser == false ? (
            <AuthenticationImage />
          ) : (
            <Navigate
              replace
              to={UrlPathname != null ? UrlPathname : "/dashboard"}
            />
          )
        }
      ></Route>
      <Route
        path="/dashboard"
        element={
          AuthUser === false ? (
            <Navigate replace to="/" />
          ) : (
            <div className="flex flex-row bg-lightGrey">
              <NavbarSimple />
              <InnerContent />
            </div>
          )
        }
      >
        <Route
          path="/dashboard"
          element={
            AuthUser === false ? (
              <Navigate replace to="/" />
            ) : (
              <Navigate replace to="manageDeos" />
            )
          }
        />
        <Route
          path="datasets"
          element={
            AuthUser === false ? (
              <Navigate replace to="/login" />
            ) : (
              <DatasetsScreen />
            )
          }
        />
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
      </Route>
      )
    </Routes>
  );
}

export default AppRoutes;
