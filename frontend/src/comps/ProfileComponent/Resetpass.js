import React, { useState } from "react";
import "./profile.css";
import { toast } from "react-toastify";

export default function Resetpass(props) {
  const [formData, setformData] = useState({
    oldPass:'',
    newPass:''
  })

  function handleChange(e) {
    const {name,value} = e.target;
    setformData({...formData,[name]:value})
  }
  async function handlePassChange(e){
    e.preventDefault()
    const response = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/changepwd`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data = await response.json()
    if(data.msg==='Password changed'){
      window.location.reload(false);
      toast.success(data.msg,{
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
    toast.error(data.msg,{
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

  return (
    <div className="modal-r mdre">
      <div className="reset-pass-p-c">
        <form>
          <button id="cl-pop" onClick={() => props.handleMChange()}>
            &times;
          </button>
          <span>Old Password</span>
          <input name='oldPass' onChange={handleChange} type="text"></input>
          <span>New Password</span>
          <input name='newPass' onChange={handleChange} type="text"></input>
          <button onClick={handlePassChange}  className="up-btn-pop">Update</button>
        </form>
      </div>
    </div>
  );
}