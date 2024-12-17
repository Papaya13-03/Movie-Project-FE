import React, { useEffect, useState } from "react";
import style from "./assets/css/style.module.css";
import { getToken, removeToken } from "../../handler/token.handler.js";
import defaultAvatar from "./assets/images/defaultAvatar.png";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();
  const token = getToken();

  const signOut = () => {
    removeToken();
    navigate("/login");
  };

  const signIn = () => {
    navigate("/login");
  };

  useEffect(() => {
    setAvatarUrl(defaultAvatar);
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.avatar}>
        <img src={avatarUrl} alt="avatar" />
      </div>
      <ul className={style.modal}>
        <li
          onClick={() => {
            if (token) signOut();
            else signIn();
          }}
        >
          {token ? "Sign out" : "Sign In"}
        </li>
      </ul>
    </div>
  );
};

export default User;
