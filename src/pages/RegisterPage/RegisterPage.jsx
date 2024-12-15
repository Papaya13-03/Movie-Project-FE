import React, { useEffect, useState } from "react";
import style from "../LoginPage/assets/css/login.module.css";
import { signupHandler } from "../../handler/auth.handler";
import { useNavigate, Link } from "react-router-dom";


const RegisterPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [errorMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const inputChange = (setInput, e) => {
    setInput(e.target.value);
    setErrMsg("");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler(email, password, confirmPassword, nickname)
      .then(res => {
        if(res.type === "error") {
          setErrMsg(res.msg);
        }
        else {
          localStorage.setItem("token",res.token);
          navigate("/");
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    document.title = "Register";
  }, []);
  
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <h1 className={style.header}>Register</h1>
        {errorMsg&&<p className={style.errorMsg}>{errorMsg}</p>}
        <form action="post" className={style.form} onSubmit={(e) => submitHandler(e)}>
          <input
            className={style.element}
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => inputChange(setEmail,e)}
            required
          />
          <input
            className={style.element}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => inputChange(setPassword,e)}
            required
            minLength={8}
          />
          <input
            className={style.element}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => inputChange(setConfirmPassword,e)}
            required
            minLength={8}
          />
          <input
            className={style.element}
            type="text"
            name="nickname"
            placeholder="What can we call you? (Your nickname)"
            value={nickname}
            onChange={(e) => inputChange(setNickname,e)}
            required
          />
          <input className={style.submit} type="submit" value="SIGN UP" />
        </form>
        <div className={style.redirect}>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
