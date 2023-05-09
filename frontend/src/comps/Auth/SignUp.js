import React, { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../../context/AuthContext/authContext";
import "./styles/login.css";
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';

export default function SignUp() {
  const navigator = useNavigate();
  const auth = useContext(AuthContext);
  
  function onlyNumberKey(evt) {
    var num = /[^0-9]/gi;
    evt.target.value = evt.target.value.replace(num,"");
}
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
      
      if(e.target.name==='phone'){
        var num = /[^0-9]/gi;
        e.target.value = e.target.value.replace(num,"");
      }

      setformData(val=>({...val,[name]:value}))
    }
    async function signupHandler(e){
      e.preventDefault()
      await auth.userSignup(formData)
      toast.success("Signup successfull!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      if(sessionStorage.getItem('location')&&sessionStorage.getItem('location')!==''){
        await navigator('/results')
      }
      await navigator('/')
    }
  return (
    <div className="login-container">
      <div>
        <h2> Welcome to Our Application </h2>
        <p> Please signup to use the platform </p>
      </div>

      <form id='signupform'>
        <Form.Group className="formInput">
            <Form.Label className="p"> Enter Full Name </Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="text"
              name="name"
              placeholder="John Doe"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="formInput">
            <Form.Label className="p">Enter Email</Form.Label>
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
            <Form.Label className="p"> Enter Password </Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="password"
              name="pwd"
              placeholder=". . ."
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <div>

          <Form.Group className="formInput">
            <Form.Label className="p"> Enter Phone Number </Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="text"
              name="phone"
              maxLength={10}
              onKeyUp={(e)=>{return onlyNumberKey(e)}}
              placeholder="9123456780"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
          <div id="select" className="formInput">
            <p className="p"> Enter Role </p>
            <select name="role" onChange={handleinput} form='signupform'>
              <option value="None" defaultValue></option>
              <option value="user">User</option>
              <option value="technician">Technician</option>
            </select>
        </div>
        </div>
          <Form.Group className="formInput">
            <Form.Label className="p"> Enter Address </Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="text"
              name="address"
              placeholder=" "
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <div id="auth-btn">
          <button onClick={signupHandler}>Sign Up</button>
        </div>
      </form>

      <div>
        <h1> </h1>
        <p style={{'display':"inline-block"}}>Already have a account?</p> <Link to="/auth/login">Login?</Link>
      </div>
    </div>
  );
}
