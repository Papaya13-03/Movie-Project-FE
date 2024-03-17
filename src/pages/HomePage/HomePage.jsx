import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import style from "./assets/css/style.module.css";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../handler/token.handler.js";
import Home from "../../components/Home/Home.jsx";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!getToken()) {
      navigate("/login");
    }
  }, [navigate]);

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
