import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isOtpVerified = localStorage.getItem("isOtpVerified");

  if (user && user.token && user.email && isOtpVerified) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RestrictedRoute;