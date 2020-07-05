import React from 'react'
import { Link, Route } from "react-router-dom"
import Login from "./Login"


export default function Navigation() {
  return (
    <>
      <div className="header">
        <div className="inner-header">
          <div className="logo-ctn">
            <Link className="logo-link" to="/"><img className="logo" src="https://i.imgur.com/A2Qdfpi.png" alt="spider-logo" /></Link>
            <h1 className="site-title">The Web Shop</h1>
          </div>
          <ul className="navigation">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/login" >Login</Link></li>
            <li> <Link to="/cart"><button className="cart-btn">View Cart</button></Link></li>
          </ul>
        </div>
      </div>

    </>
  )
}

{/* <div className="header">
  <div className="inner-header">
    <div className="logo-ctn">
      <Link className="logo-link" to="/"><img className="logo" src="https://i.imgur.com/A2Qdfpi.png" alt="spider-logo" /></Link>
      <h1 className="site-title">The Web Shop</h1>
    </div>
    <ul className="navigation">
      <li><Link to="/" >Home</Link></li>
      <li><Link to="/login" >Login</Link></li>
      <li> <Link to="/cart"><button className="cart-btn">View Cart</button></Link></li>
    </ul>
  </div>
</div> */}

{/* <header>
<div className="nav-img-ctn">
  <Link className="logo-link" to="/"><img className="logo" src="https://i.imgur.com/A2Qdfpi.png" alt="spider-logo" /></Link>
</div>
<h1 className="site-title">The Web Shop</h1>
<nav className="nav">
  <ul className="links-ctn">
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/login" >Login</Link></li>
    <li> <Link to="/cart"><button className="cart-btn">View Cart</button></Link></li>
  </ul>
</nav>
</header> */}