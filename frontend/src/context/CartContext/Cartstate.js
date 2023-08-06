import { useState } from 'react'
import CartContext from './cartContext'
export const CartState = (props)=>{
    const [cart, setcart] = useState([])

    async function deleteFromCart(user,servId){
        const reponse = await fetch(`${process.env.REACT_APP_BASE_URL}auth/${user}/cart/${servId}`,{
            method:'DELETE'
        })
        await reponse.json()
    }
    
    async function purchase(id){
        const resp = await fetch(`${process.env.REACT_APP_BASE_URL}auth/${id}/purchase`,{
            method:'PATCH'
        })
        await resp.json()
    }

    const addtocart = async(userID,data)=>{
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}auth/${userID}/addtocart`,{
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({cart:data})
        });
        await response.json();
    }

    return (
        <CartContext.Provider value={{cart,setcart,addtocart,deleteFromCart,purchase}}>
            {props.children}
        </CartContext.Provider>
    )
}