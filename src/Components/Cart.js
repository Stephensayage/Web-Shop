import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom'

export default function Cart(props) {

  const cartTotal = props.cart.map(item => Number(item.prices[0].price)).reduce((a, b) => a + b, 0)
  const trueTotal = cartTotal.toFixed(2)



  return (
    <div className="shopping-cart">
      <div className="cart-title">
        Shopping Cart
      </div>
      {props.cart.map(comic =>
        <>
          <div class="item" value={comic}>

            <div class="buttons">
              <img onClick={() => props.removeItem(comic)} name={comic.id} class="delete-btn" src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_32-512.png" />
              <img class="like-btn" src='https://cdn0.iconfinder.com/data/icons/audio-video-multimedia-music-cinema-vol-4/70/Untitled-2-92-512.png' />
            </div>

            <div class="cart-image">
              <img className="cart-image" src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} alt="comic-img" />
            </div>

            <div class="description">
              <span>{comic.title}</span>
              <span>Page Count: {comic.pageCount}</span>
              <span>{comic.format}</span>
            </div>

            <div class="quantity">
              <button class="plus-cart-btn" type="button" name="button">
                -
              </button>
              <input type="text" name="name" value="1" />
              <button class="minus-cart-btn" type="button" name="button">
                +
              </button>
            </div>

            <div class="price">${comic.prices[0].price}</div>

          </div>
        </>

      )}
      <br />
      <div className="total-ctn">
        <span className="items-in-cart">Items in cart: {props.cart.length}</span>
        <br />
        <span className="subtotal">Subtotal: {trueTotal}</span>
        <button className="complete-purch">Complete Purchase</button>
      </div>
    </div>
  )
}

{/* <div class="item">
    <div class="buttons">
      <span class="delete-btn"></span>
      <span class="like-btn"></span>
    </div>
 
    <div class="image">
      <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} alt="comic-img" />
    </div>
 
    <div class="description">
      <span>{comic.title}</span>
      <span>{comic.id}</span>
      <span>{comic.format}</span>
    </div>
 
    <div class="quantity">
      <button class="plus-btn" type="button" name="button">
        <img src="https://cdn2.iconfinder.com/data/icons/budicon-interface-layout-2/16/21-interface_-_plus_add-512.png" alt="" />
      </button>
      <input type="text" name="name" value="1">
      <button class="minus-btn" type="button" name="button">
        <img src="https://cdn2.iconfinder.com/data/icons/budicon-interface-layout-2/16/107-interface_-_minus_delete-512.png" alt="" />
      </button>
    </div>
 
    <div class="price">${comic.prices[0].price}</div>
  </div>
  </div> */}
{/* 
  <div className="cart-ctn">
            <h3>{comic.title} <button value={comic.id} onClick={() => props.removeItem(props.cart)}>Remove</button></h3>
            {console.log(comic)}
            <span>{comic.id}</span>
            <br></br>
            <span>${comic.prices[0].price}</span>
          </div>
        </> */}