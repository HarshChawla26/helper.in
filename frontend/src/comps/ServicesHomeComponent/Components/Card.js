import React from "react";
import './../service.css'
export default function Card(props) {
  return (
    <div className="row serc-img-00">
      <img className={props.classs} src={props.imgsrc} alt="services"></img>
    </div>
  );
}
