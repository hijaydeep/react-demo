import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./middleware/PrivateRoute";
import RestrictedRoute from "./middleware/RestrictedRoute";
import Otp from "./auth/Otp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <Login />
            </RestrictedRoute>
          }
        />
        <Route
          path="/otp-verification"
          element={
            <RestrictedRoute>
              <Otp />
            </RestrictedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
