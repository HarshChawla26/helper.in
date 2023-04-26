import React from 'react'
import './result.css'

function ResultCard(props) {
    const {name,desc,price,source} = props;
  return (
    <div className="box1">
        <h2 className="user">User 1</h2>
        <div className="desc">
            Name: {name} <br/>
            Charges: {price}$ <br/>
            <p>{desc}</p>
        </div>
        <div className="innerbox">
            {/* eslint-disable-next-line*/}
            <img src={source} alt="picture"/>
        </div>
    </div>
  )
}

export default ResultCard