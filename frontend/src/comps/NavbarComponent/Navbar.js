import React, { useContext, useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import authContext from './../../context/AuthContext/authContext'
import { toast } from 'react-toastify';
import Badge from 'react-bootstrap/Badge'
import cartContext from '../../context/CartContext/cartContext';
export default function Navbar() 
{
  const [CartCount, setCartCount] = useState(JSON.parse(sessionStorage.getItem('cart').length))
  const navigator = useNavigate();
  const userContext = useContext(authContext)
  const cart = useContext(cartContext)
  const badge = useRef()

  useEffect(() => {
    let clen = cart.cart.length;
    setCartCount(clen);
  }, [sessionStorage.getItem('cart')])
  
  
  async function Logout(){
    userContext.userLogout();
    await navigator('/');
    toast.success("Logout successfull!", {
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
      <nav className="Navbar p-0 sticky-top">
          <div id="website-name">
            <Link style={{'color':'#eee','textDecoration':'none'}}className='text-light' to='/'>
             helpr.in
            </Link>
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            {(sessionStorage.getItem('userID')&&sessionStorage.getItem('userID')!=='')?
            <>
              <li>
                {
                  (CartCount!==0)?
                  <Badge ref={badge} pill bg="danger">
                    {CartCount}
                  </Badge>
                  :''
                }
                <Link to='/cart'>Cart</Link>
              </li>
              <li>
                <Link to='/profile'>My Profile</Link>
              </li>
              <li>
                <Link onClick={Logout}>Logout</Link>
              </li>
            </>
            :
            <>
              <li>
                <Link to="/auth/login">Login</Link>
              </li>
              <li>
                <Link to="/auth/signup">Signup</Link>
              </li>
            </>
            }
          </ul>
    </nav>
  )
}


