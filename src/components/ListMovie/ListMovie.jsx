import React, { useEffect, useState } from "react";
import style from "./assets/css/style.module.css";
import { getData } from "../../axios/api.axios";
import MovieSmallBox from "../MovieSmallBox/MovieSmallBox";

const ListMovie = ({ url, name, isCustomApi }) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    if(isCustomApi) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/favorite`, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(res => {
          setData(res);
        })
        .catch(error => console.error('Error', error));
    } else {
      getData({url,page:1})
      .then((res) => {
        if(res.results) setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [url, isCustomApi]);

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
