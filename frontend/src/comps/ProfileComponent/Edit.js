import React, { useState } from "react";
import "./profile.css";
import { toast } from "react-toastify";

export default function EditData(props) {
  const [formData, setformData] = useState({
    name:props.name,
    email:props.email,
    phone:props.phone,
    address:props.address
  })
  
  function handleChange(e) {
    const {name,value} = e.target;
    setformData({...formData,[name]:value})
  }

  async function handleupdate(e){
    e.preventDefault()
    const resp = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/editinfo`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })

    const respData = await resp.json()
    if(respData.msg==='Profile updated'){
      window.location.reload(false)
      toast.success(respData.msg,{
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
    toast.error(respData.msg,{
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
      <div className="edit-data-p-c">
        <form>
          <button id="cl-pop" onClick={() => props.handleMChange()}>
            &times;
          </button>
          <table>
            <tbody>

            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Contact No.</td>
              <td>
                <input
                  type="integer"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  ></input>
              </td>
            </tr>
            </tbody>
          </table>
          <button onClick={handleupdate} className="up-btn-pop">Update</button>
        </form>
      </div>
    </div>
  );
}
