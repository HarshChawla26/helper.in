import React from 'react'
import './result.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

function ResultCard(props) {
    const {name,desc,price,source} = props;

    const HandleService = ()=>{
      
    }

  return (
    <div className="box">
      <div className="innerbox">
        {/* eslint-disable-next-line*/}
        <img src={source} alt="image" />
      </div>
      <div className="desc">
        <p className="desc-in">{name}</p>
        <p className="desc-p">{(desc.length>100)?desc.slice(0,120)+"...":desc}</p>
        <div>
        <span>₹ {price} per hr</span>
        <Button onClick={HandleService} variant={'warning'} className="add">
          Add
        </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard