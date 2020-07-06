import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from "axios"

export default function Product(props) {
  const params = useParams()
  const results = params.charId

  const [comics, updateComics] = useState([])
  const [hero, updateHero] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const getComics = await axios(`https://gateway.marvel.com:443/v1/public/characters/${results}/comics?ts=1&apikey=06b42438e6fc97699635d0417a9ed04a&hash=4414c85877df0e1d08fa4332de972f8b`)
      updateComics(getComics.data.data.results)
      console.log(getComics.data.data.results)
    }
    callApi()
  }, [])


  return (
    <>

      <div className="master-comic-ctn">
        <h1 className="comics-title">Available Comics</h1>
        {comics.filter(items => items.prices[0].price !== 0).map(comic =>
          <>
            <div className="comics-ctn">
              <img className="comic-img" src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} />
              <br />
              <h3 className="comic-title">{comic.title}</h3>
              <br />
              <p className="comic-desc">{comic.description}</p>
              <br />
              <i className="comic-price">Price: $ {comic.prices[0].price}</i>
              <button value="addtocart" className="add-to-cart" onClick={() => props.addToCart(comic)}>Add To Cart</button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
