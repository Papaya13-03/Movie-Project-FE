import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import style from "./assets/css/style.module.css";
import Home from "../../components/Home/Home.jsx";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className={style.wrap}>
      <Header />
      <div className={style.content}>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
