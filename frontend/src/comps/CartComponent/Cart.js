import React, { useContext, useEffect, useState } from 'react'
import './cart.css';
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import cartContext from '../../context/CartContext/cartContext';
import { toast } from 'react-toastify';
import {TimePicker,DatePicker} from 'antd' 
function Cart() {
    const cartcon = useContext(cartContext)
    const [cart,setcart] = useState([])
    const [amount, setamount] = useState(0)
    const navigator = useNavigate()
    function amounting(c){
            let arr = c;
            let num = 0;
            for(let i=0;i<arr.length;i++){
                num += arr[i].price;
            }
            // sessionStorage.setItem('amount',num)
            setamount(num);
    }
    async function getCartData(){
        const response = await fetch(`http://localhost:4000/auth/${sessionStorage.getItem('userID')}/cart`)
        const respData = await response.json()
        await setcart(respData.cart)
        await amounting(respData.cart)
    }
    function deleteItem(id){
        cartcon.deleteFromCart(sessionStorage.getItem('userID'),id)
        toast.success("Deleted from Cart", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        getCartData()
    }

    useEffect(() => {
        if(sessionStorage.getItem('userID')&&sessionStorage.getItem('userID')!==''){
            getCartData()
        }
        // eslint-disable-next-line
    }, [])
    

    
    // async function getServicesData(id){
    //     const response = await fetch(`http://localhost:4000/services/${id}`)
    //     const respData = await response.json()
    //     return respData.service
    // }

    
    function handlePurchase(){
        toast.success('Purchase done!',{
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
          cartcon.purchase(sessionStorage.getItem('userID'))
        navigator('/');
    }
    // if(cartcon.cart.length===0){
    //     return (
    //         <div>No items to show</div>
    //     )
    // }
  return (
    <div id='cart-wrapper'>
        <div id="cart-container">
            <h3>Items In cart</h3>
            <div id='all-area'>
                <div id='cart-area'>
                     {
                    (cart.length>0)?
                        cart.map((ele,index)=>{    
                        return (
                                <div key={index} className='box' id="item-card">
                                    <div className="innerbox">
                                        {/* eslint-disable-next-line*/}
                                        <img src={''} alt="image" />
                                    </div>
                                    <div className="desc">
                                        <div>
                                            <p className="desc-in">{ele.name}</p>
                                            <TimePicker.RangePicker></TimePicker.RangePicker>
                                            <DatePicker></DatePicker>
                                        </div>

                                        <div>
                                            <span>₹ {ele.price}</span>
                                            <Button className='delete-btn' onClick={(e)=>{deleteItem(ele.id)}} variant='danger'>Delete</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                    ):<div>No items to show</div>
                    } 
                </div>
                <div id='amount-area'>
                    <div>
                        <h4>Total Amount to be paid</h4>
                        <p>₹ {amount} </p>
                        <Button onClick={handlePurchase} variant='warning'>Payment</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart