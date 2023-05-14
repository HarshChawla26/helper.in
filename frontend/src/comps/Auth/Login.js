import React, { useContext, useState } from "react";
import {   Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/authContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from 'react-bootstrap/Form';
import "./styles/login.css";

export default function Login() {
  const navigator = useNavigate();

  const [formData, setformData] = useState({
    email: "",
    pwd: "",
  });
  const userState = useContext(AuthContext);

  function handleinput(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setformData((val) => ({ ...val, [name]: value }));
  }
  async function handleLogin(e) {
    e.preventDefault();
    await userState.userLogin(formData);
  }
  return (
    <>
      <div className="login-container">
        <div>
          <h2 className="login-h2"> Welcome to Our Application </h2>
          <p> Please login to use the platform </p>
        </div>

        <form id="loginform">

          <Form.Group className="formInput">
            <Form.Label className="p"  required>Enter Email</Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
          <Form.Group className="formInput">
            <Form.Label className="p" required> Enter Password </Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="password"
              name="pwd"
              placeholder="..."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
          {/* <div>
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
          />
          <label htmlFor="remember">Remember Me</label>
        </div> */}

          <div>
            <button onClick={handleLogin}>SIGN IN</button>
          </div>
        </form>

        <div>
          <Link to="/auth/signup">Sign Up?</Link>
        </div>
      </div>
    </>
  );
}
