import "./App.css";
import { useAuth } from "../contextApi/authContext";
import Authorized from "../routes/Authorized";
import Unauthorized from "../routes/Unauthorized";
function App() {
  const { AuthUser, AccessTokenChecking } = useAuth();

  if (!AuthUser) {
    AccessTokenChecking();
  }

  return (
    <div className="App">{AuthUser ? <Authorized /> : <Unauthorized />}</div>
  );
}

export default App;
