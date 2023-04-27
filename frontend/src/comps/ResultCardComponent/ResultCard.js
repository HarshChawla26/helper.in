import React from 'react'
import './result.css'

function ResultCard(props) {
    const {name,desc,price,source} = props;
  return (
    <div className="box1">
      <div className="innerbox">
        {/* eslint-disable-next-line*/}
        <img src={source} alt="image" />
      </div>
      {/* <h2 className="user">User 1</h2> */}
      <div className="desc">
        <div className="desc-in">
          Service Name: {name} <br></br>
          Charges: {price}$149.99<br></br>
        </div>
        <p>{desc}</p>
        <button class="add">
          <h5>TryNow</h5>
        </button>
      </div>
    </div>
  );
}

export default ResultCard