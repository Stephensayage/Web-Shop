import React from 'react'
import { Link, Route } from "react-router-dom"
import Login from "./Login"


export default function Navigation(props) {
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
            <li> <Link to="/cart"><button className="shop-btn"><img className="shop-btn-img" src="https://image.flaticon.com/icons/svg/846/846423.svg" />{props.cart.length}</button></Link></li>
          </ul>
        </div>
      </div>

    </>
  )
}

