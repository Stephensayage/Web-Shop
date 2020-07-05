import React, { useState, useEffect } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom"
import axios from 'axios';
import SuperHero from './Components/SuperHero';
import Navigation from './Components/Navigation';
import Comics from "./Components/Comics"
import Cart from "./Components/Cart"
import Login from "./Components/Login"
import Footer from "./Components/Footer"

export default function App() {
  const API_Public_Key = process.env.REACT_APP_MARVEL_API_KEY
  console.log(API_Public_Key)
  const hash = '4414c85877df0e1d08fa4332de972f8b'

  const [spider, updateSpider] = useState([])
  const [cart, updateCart] = useState([])
  const [comics, updateComics] = useState([])


  useEffect(() => {
    const callApi = async () => {
      const spiderMan = await axios(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&limit=100&offset=1&&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      updateSpider(spiderMan.data.data.results)

    }
    callApi()
  }, [])


  function addToCart(item) {

    updateCart([...cart, item])

  }

  // function removeItem(e) {
  //   console.log('click remove worked.')
  //   const idName = e.target.value
  //   cart.splice(idName, 1)
  // }

  function removeItem(comic) {
    let index = cart.indexOf(comic)
    // console.log(index)
    // console.log(cart)
    cart.splice(index, 1)
    // console.log(cart)
    updateCart([...cart])
  }

  // function removeItem(e) {
  //   let comicId = e.target.name
  //   console.log(e.target.name)
  //   for (let i = cart.length; i >= 0; --i) {
  //     if (cart[i].id === comicId) {
  //       console.log(i)
  //       cart.splice(i, 1)
  //     }
  //   }
  //   console.log(cart)
  //   updateCart(cart)
  // }

  // function removeItem(e) {
  //   let comicId = e.target.name
  //   console.log(comicId)
  //   console.log(cart)
  //   let newCart = cart.filter(function (cart) {
  //     return cart.id !== comicId
  //   })
  //   console.log(newCart)
  //   updateCart(newCart)
  // }

  return (
    <>
      <Navigation />
      <Route path="/" exact>
        <SuperHero spider={spider} />
      </Route>
      <Route path="/comics/:charId">
        <Comics addToCart={addToCart} cart={cart} />
      </Route>
      <Route path="/cart">
        <Cart cart={cart} comics={comics} removeItem={removeItem} />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Footer />
    </>
  )
}


