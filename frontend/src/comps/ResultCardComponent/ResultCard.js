import React, { useContext } from 'react'
import './result.css'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import cartContext from '../../context/CartContext/cartContext';
import AuthContext from '../../context/AuthContext/authContext';

function ResultCard(props) {
    const {name,desc,price,source} = props;
    const cart = useContext(cartContext)
    const userCon = useContext(AuthContext)
    const navigate = useNavigate()
    
    const HandleService = ()=>{
      let userObj = userCon.user;
      if(!userObj||!sessionStorage.getItem('userID')||(sessionStorage.getItem('userID')&&sessionStorage.getItem('userID')==='')){
        navigate('/auth',{redirect:true});
        return;
      }
          
      cart.addtocart(sessionStorage.getItem('userID'),props);
        toast.success("Added to Cart", {
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
        <span>₹ {price}</span>
        <Button onClick={HandleService} variant={'warning'} className="add">
          Add
        </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard