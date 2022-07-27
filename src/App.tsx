import "./App.css";
import AuthProvider from "./Pages/ContextApi/authContext";
import AppRoutes from "./RouteSystem/AppRoutes";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
