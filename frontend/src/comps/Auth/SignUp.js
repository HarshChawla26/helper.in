import React from "react";
import {Link} from "react-router-dom"

export default function SignUp() {
  return (
    <div className="login-container">
      <div>
        <h1> Welcome to Our Application </h1>
        <p> Please signup to use the platform </p>
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
          <button>Sign Up</button>
        </div>
      </form>

      <div>
        <Link to="/auth/login">Login?</Link>
      </div>
    </div>
  );
}
