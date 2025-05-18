import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("tokenExpiry");

  const isTokenValid = token && expiry && new Date().getTime() < Number(expiry);

  if (isTokenValid) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
