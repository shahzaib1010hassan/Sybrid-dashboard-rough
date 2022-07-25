import "./App.css";
import MainRoutes from "./Routes";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DatasetsScreen from "./Pages/Screen/DatasetsScreen";
import ManageDeosScreen from "./Pages/Screen/ManageDeosScreen";
import ReportScreen from "./Pages/Screen/ReportScreen";
import SettingScreen from "./Pages/Screen/SettingScreen";
import { NavbarSimple } from "./Pages/Compnent/Navbar";
import About from "./Pages/Screen/ReportNestedScreen/About";
import Home from "./Pages/Screen/ReportNestedScreen/Home";
function App() {
  return (
    <div className="App">
      <div className="flex flex-row bg-lightGrey w-full">
        <NavbarSimple />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
