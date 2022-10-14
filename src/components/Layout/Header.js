import { Fragment } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../image/pic2.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link className={classes.Link} to="/MainPage2">
          <h1>Beauty Platform</h1>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="beauty platform" />
      </div>
    </Fragment>
  );
};

export default Header;
