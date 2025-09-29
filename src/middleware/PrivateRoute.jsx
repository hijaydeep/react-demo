import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isOtpVerified = localStorage.getItem("isOtpVerified");

  if (!user || !user.token || !user.email || !isOtpVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;