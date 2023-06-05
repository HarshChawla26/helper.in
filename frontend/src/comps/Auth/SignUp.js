import React, { useContext, useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import AuthContext from "../../context/AuthContext/authContext";
import "./styles/login.css";
import { toast } from "react-toastify";
import Form from 'react-bootstrap/Form';

export default function SignUp() {
  const navigator = useNavigate();
  const auth = useContext(AuthContext);
  const [data, setdata] = useState([])
  
  function onlyNumberKey(evt) {
    var num = /[^0-9]/gi;
    evt.target.value = evt.target.value.replace(num,"");
}

  useEffect(() => {
    async function getServices(){
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}services/allservices`);
      const resp = await response.json();
      if(resp.msg==='Services recieved'){
        await setdata(resp.arr)
      }else{
        await toast.error(resp.msg, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      }
    }
    getServices()
  }, [])
  
  const [formData, setformData] = useState({
    name: "",
    email: "",
    pwd: "",
    phone: "",
    address: "",
    role: "",
    service:"none"
    })
    function handleinput(e){
      const name=e.target.name;
      const value=e.target.value;
      
      if(e.target.name==='phone'){
        var num = /[^0-9]/gi;
        e.target.value = e.target.value.replace(num,"");
      }

      setformData({...formData,[name]:value})
    }
    async function signupHandler(e){
      e.preventDefault()
      if(!formData.name||!formData.email||!formData.pwd||!formData.phone||!formData.address||!formData.role||!formData.service){
        toast.error('Information not complete',{
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        return;
      }
      console.log(formData)
      await auth.userSignup(formData)
      
      if(sessionStorage.getItem('location')&&sessionStorage.getItem('location')!==''){
        await navigator('/results')
      }
      await navigator('/')
    }
  return (
    <div className="login-container">
      <div>
        <h2 className="login-h2"> Welcome to Our Application </h2>
        <p className="login-h2"> Please signup to use the platform </p>
      </div>

      <form id="signupform">
        <Form.Group className="formInput">
          <Form.Label className="p" required> Enter Full Name </Form.Label>
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
          <Form.Label className="p" required>Enter Email</Form.Label>
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
            placeholder=". . ."
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <div >
          <Form.Group className="formInput">
            <Form.Label className="p" required> Enter Phone Number </Form.Label>
            <Form.Control
              onChange={handleinput}
              required
              type="text"
              name="phone"
              maxLength={10}
              onKeyUp={(e) => {
                return onlyNumberKey(e);
              }}
              placeholder="912XXXXXXX"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <div id="select" className="formInput">
            <p className="p login-h2" required> Enter Role </p>
            <select name="role" onChange={handleinput} form="signupform">
              <option value="None" defaultValue></option>
              <option value="user">User</option>
              <option value="technician">Technician</option>
            </select>
          </div>
        </div>
        <Form.Group className="formInput">
          <Form.Label htmlFor='address' className="p" required> Enter Address </Form.Label>
          <Form.Control
            onChange={handleinput}
            required
            type="text"
            name="address"
            placeholder=" "
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <small className="sm-p">Select none if you are an user</small>
        <Form.Select required name='service' onChange={handleinput} aria-label="Default select example">
          <option>none</option>
          {data &&
            data.map((e) => {
              return <option key={e} value={e}>{e}</option>;
            })}
        </Form.Select>
        <div id="auth-btn">
          <button type="submit" onClick={signupHandler}>Sign Up</button>
        </div>
      </form>

      <div id="signup-div">
        <h1> </h1>
        <span className="sm-p" style={{ display: "inline-block" }}>
          Already have a account?
        </span>{" "}
        <Link to="/auth/login">Login?</Link>
      </div>
    </div>
  );
}
