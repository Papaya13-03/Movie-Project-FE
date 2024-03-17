import React from "react";
import style from "./assets/css/style.module.css";

const Footer = () => {
  return (
    <div className={style.wrap}>
      <div>
        Develop by <b>Papaya</b>
      </div>
      <div className={style.social_media}>
        <div className={style.element}>
          <a href="https://www.instagram.com/papaya.1303/">
            <i className="fa-brands fa-instagram" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
        <div className={style.element}>
          <a href="https://twitter.com/Papaya_13_3">
          <i className="fa-brands fa-x-twitter" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
        <div className={style.element}>
          <a href="https://www.facebook.com/Papaya1303/">
          <i className="fa-brands fa-facebook-f" style={{ color: "#ffffff" }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
