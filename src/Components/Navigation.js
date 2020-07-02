import React from 'react'
import { Link, Route } from "react-router-dom"
import Login from "./Login"


export default function Navigation() {
  return (
    <>
      <header>
        <div className="nav-img-ctn">
          <Link className="logo-link" to="/"><img className="logo" src="https://i.imgur.com/A2Qdfpi.png" alt="spider-logo" /></Link>
        </div>
        <h1>The Web Shop</h1>
        <nav className="nav">
          <ul className="links-ctn">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/login" >Login</Link></li>
            <li> <Link to="/cart"><button className="cart-btn">View Cart</button></Link></li>
          </ul>
        </nav>
      </header>

    </>
  )
}