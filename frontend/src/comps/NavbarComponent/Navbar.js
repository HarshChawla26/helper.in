import React, { useContext } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import authContext from './../../context/AuthContext/authContext'
import { toast } from 'react-toastify';
export default function Navbar() 
{
  const navigator = useNavigate();
  const userContext = useContext(authContext)
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


