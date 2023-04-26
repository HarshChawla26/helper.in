import React from "react";
import { Link } from "react-router-dom";
import "./styles/login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div>
        <h1> Welcome to Our Application </h1>
        <p> Please login to use the platform </p>
      </div>

      <form>
        <div>
          <p> Enter Email </p>
          <input type="email" name="email" />
        </div>
        <div>
          <p> Enter Password </p>
          <input type="password" name="pass" />
        </div>
        <div>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          <label htmlFor="remember">Remember Me</label>
        </div>

        <div>
          <button>SIGN IN</button>
        </div>
      </form>

      <div>
        <Link to="/auth/signup">Sign Up?</Link>
      </div>
    </div>
  );
}
