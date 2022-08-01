import "./App.css";
import AuthProvider from "../context/authContext";
import AppRoutes from "../routes/AppLevelRoute/AppRoutes";

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
