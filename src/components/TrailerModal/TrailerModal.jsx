import React from 'react'
import style from "./assets/css/style.module.css"

const TrailerModal = ({trailerId, setIsPlayingTrailer}) => {

  const handleOnlick = (e) => {
    e.preventDefault();
    setIsPlayingTrailer(false);
  }

  return (
    <div className={style.wrap}   onClick={handleOnlick}>
        <div className={style.close_btn}>
          <h1>Trailer Playing</h1>
          <i className="fa-solid fa-xmark"   onClick={handleOnlick}></i>
        </div>
        <iframe src={`https://www.youtube.com/embed/${trailerId}`} title="Vụ 7 người nhập cư được cho là công dân Việt Nam ở Anh: Sẵn sàng bảo hộ công dân | VTC Now" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default TrailerModal