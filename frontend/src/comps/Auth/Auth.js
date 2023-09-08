import React from "react";
import "./styles/auth.css";
import { Navigate, Route, Routes } from "react-router";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth() {
  return (
    <div id="wrapper-auth">
    <div className="auth-container">
      <div className="auth-left">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="./login" />} />
        </Routes>
      </div>

      <div className="auth-right">
        <img id="finger-scan" src={require("../../Assets/auth.png")} alt="Technician.png" />
      </div>
    </div>
    </div>
  );
}
