import { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../image/Logo.png";
import headerImageL from "../../image/LogoL.png";
import classes from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/Login-slice";

const Footer = (props) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.themeValue);

  return (
    <>
      {theme && (
        <Footer className={classes.footer}>
          <div className={classes.inner}>
            <h2>Beauty Platform</h2>
          </div>
        </Footer>
      )}
      {!theme && (
        <Footer className={classes.footerL}>
          {" "}
          <div className={classes.inner}>
            {" "}
            <h2>Beauty Platform</h2>
          </div>
        </Footer>
      )}

      {/*
      <header className={classes.header}>
        <Link className={classes.Link} to="/MainPage2">
          <h1>Beauty Platform</h1>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="beauty platform" />
      </div>
      */}
    </>
  );
};

export default Footer;
