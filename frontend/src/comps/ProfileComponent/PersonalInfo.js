import React, { useContext } from 'react'
import './profile.css'
import { toast } from "react-toastify";

import AuthContext from '../../context/AuthContext/authContext'
import { useNavigate } from 'react-router';
export default function PersonalInfo(props) {
  const navigate = useNavigate()
  const userCon = useContext(AuthContext)
  async function deleteAccount(){
    userCon.deleteAccount(props.id)
    await navigate('/',{redirect:true})
    toast.success("Account deleted", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
  return (
    <div id="pinfo">
        <h1>Personal Information</h1>
        <div id="pi">
            <div>
                <h5>Name</h5>
                <br/>
                <h5>E-Mail</h5>
                <br/>
                <h5>Contact No.</h5>
                <br/>
                <h5>Address</h5>
            </div>
                    
            <div>
                <input type="text" placeholder="Enter your name" value={props.name} disabled/>
                <button className="button">Edit</button>
                <br/><br/>
                <input type="email" placeholder="@gmail.com"  value={props.email} disabled/>
                <button className="button">Edit</button>
                <br/><br/>
                <input type="integer" placeholder="+91" value={props.phone}  disabled/>
                <button className="button">Edit</button>
                <br/><br/>
                <input type="address" placeholder="Type your address" value={props.address} disabled/>
                <button className="button">Edit</button>
            </div>
      </div>
        <div id="button">
            <button className="delete"><h5>Reset Password</h5></button><br/><br/>
            <button onClick={deleteAccount} className="delete"><h5>Delete Account</h5></button>
        </div>
    </div>
  )
}
