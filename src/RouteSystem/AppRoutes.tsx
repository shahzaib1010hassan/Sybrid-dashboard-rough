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
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationImage />}></Route>
      <Route
        path="/dashboard"
        element={
          <div className="flex flex-row bg-lightGrey">
            <NavbarSimple />
            <InnerContent />
          </div>
        }
      >
        <Route path="/dashboard" element={<Navigate replace to="manageDeos" />} />
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
      </Route>
    </Routes>
  );
}

export default AppRoutes;
