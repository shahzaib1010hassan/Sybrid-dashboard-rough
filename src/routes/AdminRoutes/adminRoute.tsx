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
import UserInfoIcons from "../../Pages/Screen/UserProfile/UserProfileDetails";
import PageNotFound from "../../Pages/Screen/pagenotfound/pagenotfound";
function AdminRoute() {
  return (
    <Routes>
      <Route path="/admin" element={<Navigate replace to="datasets" />}>
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
    </Routes>
  );
}

export default AdminRoute;
