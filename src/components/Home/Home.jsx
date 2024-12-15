import React, { useState, useEffect } from 'react';
import style from "./assets/css/style.module.css";
import ListMovie from "../ListMovie/ListMovie.jsx";
import MovieSmallBox from "../MovieSmallBox/MovieSmallBox";
import style2 from "../../pages/MovieListPage/assets/css/style.module.css";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchTerm.trim()) {
      fetch(`${process.env.REACT_APP_SERVER_URL}/movies?search=${searchTerm}`, { method: 'GET' }).then(res => {
        if (res.results) {
          setData(res.results);
        }
      })
      .catch(err => {
        console.error("Error fetching search results:", err);
      });
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      setData([]);
    }
  }, [searchTerm]);

  return (
    <div className={style.wrap}>
      <div className="pt-12">
        <input
          type="text"
          className="w-full p-4 text-gray-800 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyDown={handleSearch}
        />
      </div>
      {searchTerm && data.length > 0 ? (
       <div className={style2.container}>
        <div className={style2.movie_wrap}>
          {data.map((details, index) => {
            return (
              <MovieSmallBox
                key={index}
                imageUrl={
                  details.poster_path
                    ? "https://image.tmdb.org/t/p/original/" +
                      details.poster_path
                    : null
                }
                name={details.original_title}
                date={details.release_date}
                movieId={details.id}
                rate={details.vote_average}
              />
            );
          })}
        </div>
      </div>
      ) : (
        <>
          <ListMovie name="recommend for you" url="/trending/movie/day" isCustomApi={false} />
          <ListMovie name="trending" url="/trending/movie/day" />
          <ListMovie name="now playing" url="/now-playing" />
          <ListMovie name="popular" url="/popular" />
          <ListMovie name="top rated" url="/top-rated" />
          <ListMovie name="upcoming" url="/upcoming" />
        </>
      )}
    </div>
  );
}

export default Home;
