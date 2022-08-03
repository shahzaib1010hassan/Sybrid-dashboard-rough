import { Routes, Route } from "react-router-dom";
import { NavbarSimple } from "../../component/Navbar";
import InnerContent from "../../Pages/Screen/InnerContent";
import { Navigate, useNavigate } from "react-router-dom";
import DatasetsScreen from "../../Pages/Screen/DatasetsScreen";
import ManageDeosScreen from "../../Pages/Screen/ManageDeosScreen";
import Home from "../../Pages/Screen/ReportNestedScreen/Home";
import About from "../../Pages/Screen/ReportNestedScreen/About";
import SettingScreen from "../../Pages/Screen/SettingScreen";
import ReportScreen from "../../Pages/Screen/ReportScreen";
import UserInfoIcons from "../../Pages/Screen/UserProfile/UserProfileDetails";
import PageNotFound from "../../Pages/Screen/pagenotfound/pagenotfound";
import AdminInnerContent from "../../Pages/Screen/AdminInnerContent";
import TabsData from "../../temporaryData/tabsData";
import getUserProfileData from "../../utils/userProfileData";
const Authorized = () => {
  let userRole = getUserProfileData()?.userDetails.usr_role;
  {
    console.log("I am Developer", userRole);
  }
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <div className="lg:flex bg-lightGrey lg:flex-row">
            <NavbarSimple data1={TabsData()} />
            <InnerContent />
          </div>
        }
      >
        <Route
          path="/dashboard"
          element={<Navigate replace to={"" + userRole + "/datasets"} />}
        />
        {/*Admin Routes*/}

        <Route
          path="admin"
          element={
            userRole === "admin" ? <AdminInnerContent /> : "Page Not Found"
          }
        >
          <Route path="admin" element={<AdminInnerContent />} />
          <Route path="datasets" element={<DatasetsScreen />} />
          <Route path="manageDeos" element={<ManageDeosScreen />} />
          <Route path="setting" element={<SettingScreen />} />
          <Route path="reports" element={<ReportScreen />}>
            <Route path="reports" element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="profile" element={<UserInfoIcons />} />
        </Route>

        {/*Developer Routes*/}
        <Route path="developer" element={<AdminInnerContent />}>
          <Route
            path="developer"
            element={<Navigate replace to="datasets" />}
          />
          <Route path="datasets" element={<DatasetsScreen />} />
          <Route path="setting" element={<SettingScreen />} />
          <Route path="reports" element={<ReportScreen />}>
            <Route path="reports" element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="profile" element={<UserInfoIcons />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Authorized;
