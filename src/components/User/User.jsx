import React, { useEffect, useState } from "react";
import style from "./assets/css/style.module.css";
import { removeToken } from "../../handler/token.handler.js";
import defaultAvatar from "./assets/images/defaultAvatar.png";
import {useNavigate} from "react-router-dom"

const User = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();

  const signOut = () => {
    removeToken();
    navigate("/login")
  }

  useEffect(() => {
    setAvatarUrl(defaultAvatar);
  }, []);

  return (
    <div className={style.wrap}>
      <div className={style.avatar}>
        <img src={avatarUrl} alt="avatar" />
      </div>
      <ul className={style.modal}>
        <li onClick={() => signOut()}>Sign out</li>
      </ul>
    </div>
  );
};

export default User;
