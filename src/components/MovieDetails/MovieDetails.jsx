import React from "react";
import style from "./assets/css/style.module.css";

const MovieDetails = ({ data, trailerId, setIsPlayingTrailer }) => {
  // const [isFavouriteMovie, setIsFavouriteMovie] = useGetFavouriteMovie

  const convertTime = (val) => {
    const hour = parseInt(val / 60);
    const minute = val % 60;
    return `${hour}h ${minute}m`;
  };

  const playTrailer = () => {
    if (!trailerId) {
      alert("Trailer is unable!");
      return;
    }
    setIsPlayingTrailer(true);
  };

  return (
    <div className={style.wrap}>
      {Object.keys(data).length && (
        <div className={style.details}>
          <h1>{data.original_title}</h1>
          <div>
            {data.release_date}
            <span>•</span>
            {data.genres
              .map((val) => {
                return val.name;
              })
              .join(",")}
            <span>•</span>
            {convertTime(data.runtime)}
          </div>
          <div className={style.tagline}>{data.tagline}</div>
          <div className={style.overview}>
            <h3>Overview</h3>
            {data.overview}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={style.trailer} onClick={playTrailer}>
              <i className="fa-solid fa-play"></i>
              Play Trailer
            </div>
            <button className={`${style.favourite}`}>
              <i className="fa-solid fa-heart"></i>
              Add to favourite
            </button>
          </div>
          <div className={style.homepage}>
            <a href={data.homepage}>Go to movie homepage</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
