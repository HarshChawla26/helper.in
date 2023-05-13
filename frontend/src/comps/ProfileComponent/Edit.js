import React from "react";
import "./profile.css";

export default function EditData(props) {
  return (
    <div className="modal-r mdre">
      <div className="edit-data-p-c">
        <form>
          <button id="cl-pop" onClick={() => props.handleMChange()}>
            &times;
          </button>
          <table>
            <tr>
              <td>Name</td>
              <td><input type="text"></input></td>
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="text"></input></td>
            </tr>
            <tr>
              <td>Contact No.</td>
              <td><input type="text"></input></td>
            </tr>
            <tr>
              <td>Address</td>
              <td><input type="text"></input></td>
            </tr>
          </table>
          <button className="up-btn-pop">Update</button>
        </form>
      </div>
    </div>
  );
}
