import React  from 'react'
import style from "./assets/css/style.module.css"
import ListMovie from "../ListMovie/ListMovie.jsx"

const Home = () => {

  return (
    <div className={style.wrap}>
      <ListMovie name = "trending" url="/trending/movie/day" />
      <ListMovie name = "now playing" url="/now-playing" />
      <ListMovie name = "popular" url="/popular" />
      <ListMovie name = "top rated" url="/top-rated" />
      <ListMovie name = "upcoming" url="/upcoming" />
    </div>
  )
}

export default Home