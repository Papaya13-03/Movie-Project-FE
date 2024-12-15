import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./assets/css/style.module.css";
import { getData } from "../../axios/api.axios";
import MovieSmallBox from "../../components/MovieSmallBox/MovieSmallBox";
import Loader from "../../components/Loader/Loader";

const MovieListPage = ({ url, title, page, setPage }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const pageDecrease = () => {
    if(page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
      setLoading(true);
    }
  };
  const pageIncrease = () => {
    setPage(page + 1);
    setLoading(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    document.title = title;
    getData({ url, page: 2 * page - 1 })
      .then((res) => {
        if (res.results) setData(res.results);
        getData({ url, page: 2 * page })
          .then((res) => {
            setLoading(false);
            if (res.results)
              setData((currData) => [...currData, ...res.results]);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, url, title]);

  return (
    <>
      <Header />
      <Loader loading={loading}/>
      {!loading && (
        <div className={style.container}>
          <div className={style.movie_wrap}>
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
          <div className={style.pagination}>
            <div className={style.page_changer} onClick={pageDecrease}>
              {"<"}
            </div>
            <div>Page: {page}</div>
            <div className={style.page_changer} onClick={pageIncrease}>
              {">"}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MovieListPage;
