import React from "react";
import { useAuth } from "../ContextApi/authContext";
import { Navigate } from "react-router-dom";
function RequireAuth({ children }: any) {
  const { AuthUser } = useAuth();
  let UrlPathname = localStorage.getItem("Url");
  if (!AuthUser) {
    return <Navigate replace to="/login" />;
  }
  return children;
}

export default RequireAuth;
