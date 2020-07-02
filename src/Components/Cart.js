import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

export default function Cart(props) {
  console.log(props.cart)
  const cartTotal = props.cart.map(item => Number(item.prices[0].price)).reduce((a, b) => a + b, 0)
  const trueTotal = cartTotal.toFixed(2)

  return (
    <div className="outer-cart-ctn">
      {props.cart.map(comic =>
        <>
          <div className="cart-ctn">
            <h3>{comic.title} <button value={comic.id} onClick={() => props.removeItem(props.cart)}>Remove</button></h3>
            {console.log(comic)}
            <span>{comic.id}</span>
            <br></br>
            <span>${comic.prices[0].price}</span>
          </div>
        </>

      )}
      <br />
      <div className="total-ctn">
        <span>Items in cart: {props.cart.length}</span>
        <br />
        <span>Subtotal: {trueTotal}</span>
      </div>
    </div>
  )
}
