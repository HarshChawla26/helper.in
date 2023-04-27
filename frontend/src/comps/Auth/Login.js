import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles/login.css";
import AuthContext from "../../context/AuthContext/authContext";

export default function Login() {
  const navigator = useNavigate();
  const [formData, setformData] = useState({
    email:'',
    pwd:''
  })
  const userState = useContext(AuthContext)
  function handleinput(e){
    const name = e.target.name;
    const value = e.target.value;

    setformData(val=>({...val,[name]:value}))
  }
  async function handleLogin(e){
    e.preventDefault()
    await userState.userLogin(formData);
    await navigator('/')
  }
  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])
  
  return (
    <div className="login-container">
      <div>
        <h1> Welcome to Our Application </h1>
        <p> Please login to use the platform </p>
      </div>

      <form>
        <div>
          <p> Enter Email </p>
          <input onChange={handleinput} type="email" name="email" />
        </div>
        <div>
          <p> Enter Password </p>
          <input type="password" onChange={handleinput}  name="pwd" />
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
          <button onClick={handleLogin}>SIGN IN</button>
        </div>
      </form>

      <div>
        <Link to="/auth/signup">Sign Up?</Link>
      </div>
    </div>
  );
}
