import React, { useEffect, useState } from "react";
import style from "./assets/css/login.module.css";
import { signinHandler } from "../../handler/auth.handler";
import { useNavigate, Link } from "react-router-dom";
import {saveToken} from '../../handler/token.handler.js'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const inputChange = (setInput, e) => {
    setInput(e.target.value);
    setErrorMsg("");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    await signinHandler(username,password)
      .then(data => { 
        if(data.type === "error") {
          setErrorMsg(data.msg);
        }
        else {
          navigate("/");
          saveToken(data.token);
        }
      })
      .catch(err => {
        console.log(err);
      })
  };
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <h1 className={style.header}>Login</h1>
        {errorMsg&&<p className={style.errorMsg}>{errorMsg}</p>}
        <form
          action=""
          className={style.form}
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            className={style.element}
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => inputChange(setUsername, e)}
            required
          />
          <input
            className={style.element}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => inputChange(setPassword, e)}
            minLength={8}
            required
          />
          <input className={style.submit} type="submit" value="SIGN IN" />
          <div className={style.under}>
            <label htmlFor="remember">
              <input
                className={style.checkbox}
                type="checkbox"
                name="remember"
                id="remember"
              />
              Remember Me
            </label>
            <a className={style.forgot} href="/">
              Forgot password
            </a>
          </div>
        </form>
        <div className={style.redirect}>
          Don't have an account?<Link to="/register" >Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
