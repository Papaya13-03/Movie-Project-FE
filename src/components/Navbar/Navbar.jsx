import React from "react";
import style from "./assets/css/style.module.css";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [checked, setChecked] = useState(0);
  const toggleNavbar = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (toggleNavbar.current) toggleNavbar.current.style.opacity = 1;
    }, 1500)
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <>
      <input
        type="checkbox"
        hidden
        onChange={(e) => {
          setChecked(checked ^ 1);
        }}
        id={style["navbar-toggle"]}
      />
      <label
        className={style["navbar-toggle"]}
        htmlFor={style["navbar-toggle"]}
      >
        {checked ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </label>
      <label htmlFor={style["navbar-toggle"]}>
        {checked ? <div className={style.fullsize}></div> : <div hidden></div>}
      </label>
      <ul ref={toggleNavbar} className={style.navbar}>
        <li>
          <a href="/trending">Trending</a>
        </li>
        <li>
          <a href="/now-playing">Now Playing</a>
        </li>
        <li>
          <a href="/popular">Popular</a>
        </li>
        <li>
          <a href="/top-rated">Top Rated</a>
        </li>
        <li>
          <a href="/upcoming">Upcoming</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
