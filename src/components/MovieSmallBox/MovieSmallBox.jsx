import React, { useEffect, useState } from 'react'
import style from "./assets/css/style.module.css"
import { useNavigate } from 'react-router-dom';



const MovieSmallBox = ({imageUrl,name, date, movieId, rate}) => {
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(rate > 0)setColor("red");
    if(rate >= 5)setColor("orange");
    if(rate >= 7)setColor("green");
  }, [rate])

  const redirectHandler = (e) => {
    const url = `/movie/${movieId}/details`;
    navigate(url);
  }

  return (
    <div className={style.wrap} onClick={(e) => redirectHandler(e)}>
      <div className={style.rate}
        style={{
          background: `conic-gradient(${color} ${36*rate}deg, black ${360-36*rate}deg)`
        }}
      >
        <div className={style.rate_inner}>
            {parseInt(rate*10)}%
        </div>
      </div>
      <div className={style.image}>
        {imageUrl?<img src={imageUrl}  alt={name} loading='lazy'/>:<div className={style.noImage}></div>}
      </div>
      <div className={style.content}>
        <h3 className={style.name}>{name}</h3>
        <p>{date}</p>
      </div>
    </div>
  )
}

export default MovieSmallBox