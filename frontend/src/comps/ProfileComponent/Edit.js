import React from "react";
import "./profile.css";

export default function EditData(props) {
  const [name, setName] = React.useState(props.name);
  const [email, setEmail] = React.useState(props.email);
  const [phone, setPhone] = React.useState(props.phone);
  const [address, setAddress] = React.useState(props.address);
  function handleChange1(e) {
    setName(e.value);
  }
  function handleChange2(e) {
    setEmail(e.value);
  }
  function handleChange3(e) {
    setPhone(e.value);
  }
  function handleChange4(e) {
    setAddress(e.value);
  }
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
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={handleChange1}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={handleChange2}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Contact No.</td>
              <td>
                <input
                  type="integer"
                  value={phone}
                  onChange={handleChange3}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="address"
                  value={address}
                  onChange={handleChange4}
                ></input>
              </td>
            </tr>
          </table>
          <button className="up-btn-pop">Update</button>
        </form>
      </div>
    </div>
  );
}
