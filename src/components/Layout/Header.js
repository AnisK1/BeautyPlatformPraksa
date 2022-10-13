import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../image/pic2.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Beauty Platform</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="beauty platform" />
      </div>
    </Fragment>
  );
};

export default Header;
