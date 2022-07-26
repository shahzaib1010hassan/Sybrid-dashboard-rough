import { Routes, Route, Navigate } from "react-router-dom";
import DatasetsScreen from "./Pages/Screen/DatasetsScreen";
import ManageDeosScreen from "./Pages/Screen/ManageDeosScreen";
import ReportScreen from "./Pages/Screen/ReportScreen";
import SettingScreen from "./Pages/Screen/SettingScreen";
import About from "./Pages/Screen/ReportNestedScreen/About";
import Home from "./Pages/Screen/ReportNestedScreen/Home";
import InnerContent from "./Pages/Screen/InnerContent";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="/ManageDeos" />} />
        <Route path="Datasets" element={<DatasetsScreen />} />
        <Route path="ManageDeos" element={<ManageDeosScreen />} />
        <Route path="Reports" element={<ReportScreen />}>
          <Route
            path="/Reports"
            element={<Navigate replace to="/Reports/Home" />}
          />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
        </Route>
        <Route path="Setting" element={<SettingScreen />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
