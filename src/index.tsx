import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { MantineThemeOverride, MantineProvider } from "@mantine/core";
import myTheme from "./assets/theme/project_theme";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contextApi/authContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <MantineProvider theme={myTheme} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
