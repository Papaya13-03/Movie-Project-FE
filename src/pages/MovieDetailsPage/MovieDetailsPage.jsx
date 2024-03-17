import React, { useEffect, useState } from "react";
import style from "./assets/css/style.module.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import { getData } from "../../axios/api.axios.js";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import ActorBox from "../../components/ActorBox/ActorBox.jsx";
import TrailerModal from "../../components/TrailerModal/TrailerModal.jsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const [actors, setActors] = useState([]);
  const [trailerId, setTrailerId] = useState("");
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let url = `movie-details/${movieId}`;
    getData({ url })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
    url = `credits/${movieId}`;
    getData({ url })
      .then((res) => {
        setActors(res.cast);
      })
      .catch((err) => {
        console.log(err);
      });
    url = `trailer/${movieId}`;
    getData({ url })
      .then((res) => {
        res.results.forEach((value) => {
          if (value.site === "YouTube" && value.type === "Trailer") {
            setTrailerId(value.key);
            return;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });

    window.addEventListener("resize", (e) => {
      setWindowWidth(window.innerWidth);
    });
  }, [movieId]);

  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.wrap}>
          <div className={style.backdrop}>
            <img
              src={
                process.env.REACT_APP_TMDB_IMG_URL +
                "original/" +
                data.backdrop_path
              }
              alt="backdrop"
            />
          </div>
          <div className={style.details_wrap}>
            {data.poster_path ? (
              <div className={style.poster}>
                <img
                  src={
                    process.env.REACT_APP_TMDB_IMG_URL +
                    "original/" +
                    data.poster_path
                  }
                  alt="poster"
                />
              </div>
            ) : (
              <div className={style.no_image}></div>
            )}
            <div className={style.details}>
              <MovieDetails
                data={data}
                trailerId={trailerId}
                setIsPlayingTrailer={setIsPlayingTrailer}
              />
            </div>
          </div>
        </div>
        <div className={style.caster}>
          <h1>Top Billed</h1>
          <div className={style.actors}>
            {actors.map((actor, index) => {
              if (windowWidth <= 510 && index >= 5) return;
              if (windowWidth <= 768 && index >= 5) return;
              if (windowWidth <= 1024 && index >= 7) return;
              if (windowWidth <= 1440 && index >= 11) return;
              if (index >= 17) return;
              return <ActorBox key={index} data={actor} />;
            })}
            <div className={style.view_all_caster}>View All &gt;</div>
          </div>
        </div>
      </div>
      <Footer />
      {isPlayingTrailer && (
        <div className={style.trailer_wrap}>
          <TrailerModal
            trailerId={trailerId}
            setIsPlayingTrailer={setIsPlayingTrailer}
          />
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
