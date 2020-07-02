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

  // may need to switch the & after vilian id to ?
  useEffect(() => {
    const callApi = async () => {
      const spiderMan = await axios(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&limit=100&offset=1&&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      updateSpider(spiderMan.data.data.results)
      console.log(spiderMan.data.data.results)
      // const goblin = await axios(`https://gateway.marvel.com:443/v1/public/characters/1014985&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // updateGoblin(goblin.data.data.results[0])
      // const docOct = await axios(`https://gateway.marvel.com:443/v1/public/characters/1009276&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // updateDocOct(docOct.data.data.results[0])
      // const venom = await axios(`https://gateway.marvel.com:443/v1/public/characters/1011128&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // updateVenom(venom.data.data.results[0])
      // const blkCat = await axios(`https://gateway.marvel.com:443/v1/public/characters/1009185&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // updateBlkCat(blkCat.data.data.results[0])
      // const spiderManComics = await axios(`https://gateway.marvel.com:443/v1/public/characters/${}/comics?ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // const goblinComics = await axios(`https://gateway.marvel.com:443/v1/public/characters/1014985/comics?ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // const docOctComics = await axios(`https://gateway.marvel.com:443/v1/public/characters/1009276/comics?ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // const venomComics = await axios(`https://gateway.marvel.com:443/v1/public/characters/1011128/comics?ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      // const blkCatComics = await axios(`https://gateway.marvel.com:443/v1/public/characters/1009185/comics?ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)

    }
    // https://gateway.marvel.com:443/v1/public/characters/1009610&ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b
    callApi()
  }, [])


  function addToCart(item) {
    console.log(item)
    console.log([...cart, item])
    updateCart([...cart, item])
    console.log(cart, updateCart)
  }

  function removeItem(item) {
    const index = cart.indexOf(item)
    console.log(`this is index ${index}`)
    cart.splice(index, 1)
    console.log(`This is cart ${cart}`)
    updateCart(cart)
  }




  return (
    <>
      <Navigation />
      <Route path="/" exact>
        <SuperHero spider={spider} />
      </Route>
      <Route path="/comics/:charId">
        <Comics addToCart={addToCart} />
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


