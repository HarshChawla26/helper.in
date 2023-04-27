import React, { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../../context/AuthContext/authContext";

export default function SignUp() {
  const navigator = useNavigate();
  const auth = useContext(AuthContext);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    pwd: "",
    phone: "",
    address: "",
    role: ""
    })
    function handleinput(e){
      const name=e.target.name;
      const value=e.target.value;
      setformData(val=>({...val,[name]:value}))
      // console.log(formData)
    }
    async function signupHandler(e){
      e.preventDefault()
      await auth.userSignup(formData)
      await navigator('/')
    }
  return (
    <div className="login-container">
      <div>
        <h1> Welcome to Our Application </h1>
        <p> Please signup to use the platform </p>
      </div>

      <form id='signupform'>
        <div>
          <p> Enter Full Name </p>
          <input type="text" name="name" onChange={handleinput} placeholder={'John Doe'}/>
        </div>
        <div>
          <p> Enter Email </p>
          <input type="email" name="email" onChange={handleinput} placeholder={'example@gmail.com'}/>
        </div>
        <div>
          <p> Enter Password </p>
          <input type="password" name="pwd"  onChange={handleinput}/>
        </div>
        <div>
          <p> Enter Phone Number </p>
          <input type="text" name="phone" onChange={handleinput} />
        </div>
        <div>
          <p> Enter Address </p>
          <input type="text" name="address" onChange={handleinput} />
        </div>
        <div>
          <p> Enter Role </p>
          <select name="role" onChange={handleinput} form='signupform'>
            <option value="user">User</option>
            <option value="technician">Technician</option>
          </select>
        </div>

        <div>
          <button onClick={signupHandler}>Sign Up</button>
        </div>
      </form>

      <div>
        <Link to="/auth/login">Login?</Link>
      </div>
    </div>
  );
}
