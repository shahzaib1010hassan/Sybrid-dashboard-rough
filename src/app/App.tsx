import "./App.css";
import { useAuth } from "../contextApi/authContext";
import Authorized from "../routes/Authorized";
import Unauthorized from "../routes/Unauthorized";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function App() {
  const { setAuthUser, AuthUser, AccessTokenChecking } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (AuthUser) {
      console.log("first");
      setAuthUser(true);
    } else {
      AccessTokenChecking();
    }
  }, []);

  return (
    <div className="App">{AuthUser ? <Authorized /> : <Unauthorized />}</div>
  );
}

export default App;
