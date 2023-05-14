import React, { useContext, useState } from "react";
import "./profile.css";
import { toast } from "react-toastify";
import Resetpop from "./Resetpass.js";
import EditData from "./Edit";
import AuthContext from "../../context/AuthContext/authContext";
import { useNavigate } from "react-router";
export default function PersonalInfo(props) {
  const navigate = useNavigate();
  const userCon = useContext(AuthContext);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  async function editInfo() {
    const resp = await fetch(
      `http://localhost:4000/auth/${sessionStorage.getItem("userID")}/editinfo`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      }
    );
    const response = await resp.json();
    if (response.msg === "Profile updated") {
      toast.success(response.msg, {
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
  }

  async function deleteAccount() {
    userCon.deleteAccount(props.id);
    await navigate("/", { redirect: true });
    window.location.reload(false)
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
  const [showModalReset, setShowModalReset] = useState(false);

  const ResetModalOpen = () => {
    setShowModalReset(true);
  };

  const ResetModalClose = () => {
    // console.log("called");
    setShowModalReset(false);
  };

  const [showModalEdit, setShowModalEdit] = useState(false);

  const editModalOpen = () => {
    setShowModalEdit(true);
  };

  const editModalClose = () => {
    // console.log("called");
    setShowModalEdit(false);
  };

  return (
    <div id="pinfo">
      {showModalReset && <Resetpop handleMChange={ResetModalClose} />}
      {showModalEdit && (
        <EditData
          handleMChange={editModalClose}
          name={props.name}
          email={props.email}
          phone={props.phone}
          address={props.address}
        />
      )}
      <h1>Personal Information</h1>
      <div id="pi">
        <div>
          <h5>Name</h5>
          <br />
          <h5>E-Mail</h5>
          <br />
          <h5>Contact No.</h5>
          <br />
          <h5>Address</h5>
        </div>

        <div className="pro-inps">
          <input
            type="text"
            placeholder="Enter your name"
            value={props.name}
            disabled
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="@gmail.com"
            value={props.email}
            disabled
          />
          <br />
          <br />
          <input
            type="integer"
            placeholder="+91"
            value={props.phone}
            disabled
          />
          <br />
          <br />
          <input
            type="address"
            placeholder="Type your address"
            value={props.address}
            disabled
          />
        </div>
      </div>
      <div id="buttons">
        <button className="delete-p" onClick={editModalOpen}>
          Edit
        </button>
        <br />
        <br />
        <button className="delete-p" onClick={ResetModalOpen}>
          Reset Password
        </button>
        <br />
        <br />
        <button
          onClick={deleteAccount}
          className="delete-p del-p-d"
          variant="danger"
        >
          <h5>Delete Account</h5>
        </button>
      </div>
    </div>
  );
}
