import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../image/Logo.png";
import headerImageL from "../../image/LogoL.png";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/Login-slice";

import Settings from "../Modals/Settings";

const Header = (props) => {
  const dispatch = useDispatch();

  const [settingsIsShown, setSettingsIsShown] = useState(false);

  const showSettingsHandler = () => {
    setSettingsIsShown(true);
  };
  const hideSettingsHandler = () => {
    setSettingsIsShown(false);
  };

  const theme = useSelector((state) => state.theme.themeValue);

  const navigate = useNavigate();
  const TokenHandler = () => {
    dispatch(addTodo(""));
    navigate("/");
  };
  return (
    <Fragment>
      {theme && (
        <div>
          {settingsIsShown && <Settings onClose={hideSettingsHandler} />}
          <header className={classes.header}>
            <div className={classes.left}></div>
            <div className={classes.center}>
              <Link className={classes.Link} to="/MainPage2">
                <img
                  src={headerImage}
                  alt="beauty platform"
                  className={classes.image}
                />
              </Link>
            </div>
            <div className={classes.right}>
              <div className={classes.INNERright}>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/MainPage2">
                    Home
                  </Link>
                </div>

                <div className={classes.list}>
                  <Link className={classes.Link} to="/Therapists">
                    Therapists
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/Treatments">
                    Treatments
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/Location">
                    Location
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/Reservation">
                    Reservation
                  </Link>
                </div>
                <div className={classes.list}>About us</div>
                <div className={classes.list}>
                  <button
                    className={classes.settings}
                    onClick={showSettingsHandler}
                  >
                    Settings
                  </button>
                </div>
                <div className={classes.list}>
                  <button onClick={TokenHandler}>LOGOUT</button>
                </div>
              </div>
            </div>
          </header>
        </div>
      )}
      {!theme && (
        <div>
          {settingsIsShown && <Settings onClose={hideSettingsHandler} />}
          <header className={classes.headerL}>
            <div className={classes.leftL}></div>
            <div className={classes.centerL}>
              <Link className={classes.LinkL} to="/MainPage2">
                <img
                  src={headerImageL}
                  alt="beauty platform"
                  className={classes.imageL}
                />
              </Link>
            </div>
            <div className={classes.rightL}>
              <div className={classes.INNERrightL}>
                <div className={classes.listL}>
                  <Link className={classes.LinkL} to="/MainPage2">
                    Home
                  </Link>
                </div>

                <div className={classes.list}>
                  <Link className={classes.LinkL} to="/Therapists">
                    Therapists
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.LinkL} to="/Treatments">
                    Treatments
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.LinkL} to="/Location">
                    Location
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.LinkL} to="/Reservation">
                    Reservation
                  </Link>
                </div>
                <div className={classes.listL}>
                  <button
                    className={classes.settings}
                    onClick={showSettingsHandler}
                  >
                    About us
                  </button>
                </div>
                <div className={classes.listL}>
                  <button
                    className={classes.settings}
                    onClick={showSettingsHandler}
                  >
                    Settings
                  </button>
                </div>
                <div className={classes.listL}>
                  <button onClick={TokenHandler}>LOGOUT</button>
                </div>
              </div>
            </div>
          </header>
        </div>
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
    </Fragment>
  );
};

export default Header;
