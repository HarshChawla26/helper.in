import React from "react";
import "./profile.css";

export default function Resetpass(props) {
  return (
    <div className="modal-r mdre">
      <div className="reset-pass-p-c">
        <form>
          <button id="cl-pop" onClick={() => props.handleMChange()}>
            &times;
          </button>
          <span>Old Password</span>
          <input type="password"></input>
          <span>New Password</span>
          <input type="password"></input>
          <button className="up-btn-pop">Update</button>
        </form>
      </div>
    </div>
  );
}