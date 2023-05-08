import React, { useContext, useEffect, useState } from 'react'
import './cart.css';
import Button from 'react-bootstrap/esm/Button';
import ItemCard from './ItemCardComponent/ItemCard';
import cartContext from '../../context/CartContext/cartContext';

function Cart() {
    const cartcontext = useContext(cartContext)
    const [c,setc] = useState([])
    useEffect(() => {
        setc(JSON.parse(sessionStorage.getItem('cart')))

    }, [])
    
  return (
    <div id='cart-wrapper'>
        <div id="cart-container">
            <h3>Items In cart</h3>
            <div id='all-area'>
            <div id='cart-area'>
                {c&&c.map((ele)=>{
                    console.log(ele)
                    return (
                        <ItemCard>
                            <div className='box item-card'>
                                <div className="innerbox">
                                    {/* eslint-disable-next-line*/}
                                    <img src={''} alt="image" />
                                </div>
                                <div className="desc">
                                    <div>
                                        <p className="desc-in">{ele.id}</p>
                                        {/* <label htmlFor='dateselect'>Date : </label> */}
                                        <select id="dateselect">
                                            <option value="9 may">9 May</option>
                                        </select>
                                    </div>

                                    <div>
                                        <span>₹ {ele.price} per hr</span>
                                        <select id="select">
                                            <option value="1-2pm">1:00pm - 2:00 pm</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </ItemCard>
                    )
                })}
            </div>
            <div id='amount-area'>
                <div>
                    <h4>Total Amount to be paid</h4>
                    <p>₹ 400 per hr</p>
                    <Button variant='warning'>Payment</Button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Cart