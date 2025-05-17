import { Navigate, Outlet } from "react-router-dom";

const TOKEN_KEY = "token";
const TOKEN_EXPIRY_KEY = "tokenExpiry";

const ProtectedRoute = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  const expiry = localStorage.getItem(TOKEN_EXPIRY_KEY);

  const isValid = token && expiry && Date.now() < Number(expiry);

  return isValid ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
