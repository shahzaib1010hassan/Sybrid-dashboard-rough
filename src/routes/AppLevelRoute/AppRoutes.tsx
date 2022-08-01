import AuthenticationImage from "../../Pages/Screen/LoginScreen/LoginScreen";
import { Routes, Route } from "react-router-dom";
import { NavbarSimple } from "../../component/Navbar";
import InnerContent from "../../Pages/Screen/InnerContent";
import { Navigate } from "react-router-dom";
import DatasetsScreen from "../../Pages/Screen/DatasetsScreen";
import ManageDeosScreen from "../../Pages/Screen/ManageDeosScreen";
import Home from "../../Pages/Screen/ReportNestedScreen/Home";
import About from "../../Pages/Screen/ReportNestedScreen/About";
import SettingScreen from "../../Pages/Screen/SettingScreen";
import ReportScreen from "../../Pages/Screen/ReportScreen";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profiledata from "../../temporaryData/profiledata.json";
import UserInfoIcons from "../../Pages/Screen/UserProfile/UserProfileDetails";
function AppRoutes() {
  const { loginByAcessToken, user, setUser, AuthUser } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (AuthUser) {
      //If User have details then he will redirect to Dashboard
      navigate("dashboard");
    } else {
      //If User have no details
      //console.log("I am in else again");
      var access_token_local = localStorage.getItem("accesstoken");
      console.log("Access_token_local", access_token_local);
      if (access_token_local != undefined) {
        const userProfileData = profiledata.find(
          (user1) => user1.access_token === access_token_local
        );
        if (userProfileData !== undefined) {
          console.log("I am in else again");
          setUser({
            name: userProfileData.userDetails.usr_fname,
            email: userProfileData.userDetails.usr_email,
          });
          loginByAcessToken();
          const PathLocation = window.location.pathname.slice(1);
          if (PathLocation === "login") {
            console.log("first");
            navigate("/dashboard");
          }
        } else {
          console.log("Sec");
          navigate("/login");
        }
      } else {
        localStorage.removeItem("Url");
        console.log("3rd");
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
