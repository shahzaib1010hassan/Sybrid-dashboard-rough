import AuthenticationImage from "../../Pages/Screen/LoginScreen/LoginScreen";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Unauthorized = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="login" />}></Route>
      <Route path="/login" element={<AuthenticationImage />}></Route>
    </Routes>
  );
};

export default Unauthorized;
