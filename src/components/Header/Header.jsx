import style from "./assets/css/style.module.css";
import Navbar from "../Navbar/Navbar.jsx";
import User from "../User/User.jsx";

const Header = () => {

  return (
    <>
      <div className={style.wrap}>
        <Navbar />
        <h1 className={style.logo}>
          <a href="/">Movie</a>
        </h1>
        <User />
      </div>
    </>
  );
};

export default Header;
