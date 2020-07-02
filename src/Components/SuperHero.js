import React from 'react'
import { Link } from "react-router-dom"

export default function SuperHero(props) {

  //master-ctn and char-ctn

  return (
    <>
      <div className="grid-ctn">
        {console.log(props.spider[0])}
        {props.spider.map(spider =>
          <>
            <div key={spider.id} className="grid-item">
              <div className="char-img-ctn">
                <img className="char-img" src={`${spider.thumbnail.path}/portrait_xlarge.${spider.thumbnail.extension}`} />
              </div>
              <div className="char-content-ctn">
                <span>{spider.name}</span>
                <span>{spider.description}</span>
              </div>
              <Link to={`/comics/${spider.id}`}><button className="comics-btn">View Comics</button></Link>
            </div>

          </>
        )}
      </div>
    </>

  )
}