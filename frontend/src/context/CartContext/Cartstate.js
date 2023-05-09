import { useState } from 'react'
import CartContext from './cartContext'
export const CartState = (props)=>{
    const [cart, setcart] = useState([])


    return (
        <CartContext.Provider value={{cart,setcart}}>
            {props.children}
        </CartContext.Provider>
    )
}