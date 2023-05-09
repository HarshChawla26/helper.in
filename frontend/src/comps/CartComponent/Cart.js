import React, { useContext, useEffect, useState } from 'react'
import './cart.css';
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button';
import ItemCard from './ItemCardComponent/ItemCard';
import cartContext from '../../context/CartContext/cartContext';
import { toast } from 'react-toastify';

function Cart() {
    const cartcon = useContext(cartContext)
    const [c,setc] = useState([])
    const [cart,setcart] = useState([])
    const navigator = useNavigate()

    function deleteItem(id){
        let a = cartcon.cart;
        a = a.filter((e)=>{
            return e.id!==id;
        })
        setcart(a);
        sessionStorage.setItem('cart',JSON.stringify(cart))
    }
    useEffect(()=>{
        console.log(cartcon.cart)
        if(sessionStorage.getItem('cart')){
            setc(JSON.parse(sessionStorage.getItem('cart')))
            async function getServicesData(id){
                const response = await fetch(`http://localhost:4000/services/${id}`)
                const respData = await response.json()
                return respData.service
            }
            let a = []
            JSON.parse(sessionStorage.getItem('cart')).map(async (e)=>{
                const k = await getServicesData(e.id)
                await a.push(k)
            })
            setcart(a)
        }
    },[])
    useEffect(() => {
        if(sessionStorage.getItem('cart')){
            setc(JSON.parse(sessionStorage.getItem('cart')))
            async function getServicesData(id){
                const response = await fetch(`http://localhost:4000/services/${id}`)
                const respData = await response.json()
                return respData.service
            }
            let a = []
            JSON.parse(sessionStorage.getItem('cart')).map(async (e)=>{
                const k = await getServicesData(e.id)
                await a.push(k)
            })
            setcart(a)
        }
    },[cartcon.cart])
    
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
                    {/* {cart.length===0} */}
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
                        <p>₹ 400 per hr</p>
                        <Button onClick={handlePurchase} variant='warning'>Payment</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart