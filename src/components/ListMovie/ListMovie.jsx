import React, { useEffect, useState } from "react";
import MovieSmallBox from "../MovieSmallBox/MovieSmallBox";
import style from "./assets/css/style.module.css";
import { getData } from "../../axios/api.axios";

const ListMovie = ({ url, name }) => {
  const [data, setData] = useState([]);
  useEffect(() => {

    getData({url,page:1})
      .then((res) => {
        if(res.results)setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div className={style.container}>
      <h1 className={style.header}> {name}</h1>

      <div className={style.wrap}>
        {data.map((val, index) => {
          return (
            <MovieSmallBox
              key={index}
              imageUrl={"https://image.tmdb.org/t/p/original/" + val.poster_path}
              name={val.original_title}
              date={val.release_date}
              movieId={val.id}
              rate = {val.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
