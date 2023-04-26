import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() 
{
  return (
      <nav className="navbar">
          <div>
             HELPER
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth/login">Login</Link></li>
            <li><Link to="/auth/signup">Signup</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
    </nav>
  )
}


