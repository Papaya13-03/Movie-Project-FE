import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieListPage from "./pages/MovieListPage/MovieListPage.jsx";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState(1);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trending" element={<MovieListPage page={page} setPage={setPage} url="/trending/movie/day" title="Trending" />} />
        <Route path="/now-playing" element={<MovieListPage page={page} setPage={setPage} url="/now-playing" title="Now Playing"/>} />
        <Route path="/popular" element={<MovieListPage page={page} setPage={setPage} url="/popular" title="Popular"/>} />
        <Route path="/top-rated" element={<MovieListPage page={page} setPage={setPage} url="/top-rated" title="Top Rated" />} />
        <Route path="/upcoming" element={<MovieListPage page={page} setPage={setPage} url="/upcoming" title="Upcoming" />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/movie/:movieId/details" element = {<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
