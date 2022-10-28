import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../image/DarkLogo.png";
import headerImageL from "../../image/LogoL.png";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/Login-slice";

import Settings from "../Modals/Settings";
import CustomButton from "../UI/Button";

const Header = (props) => {
  const dispatch = useDispatch();

  const [settingsIsShown, setSettingsIsShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showSettingsHandler = () => {
    setSettingsIsShown(true);
  };
  const hideSettingsHandler = () => {
    setSettingsIsShown(false);
  };

  const theme = useSelector((state) => state.theme.themeValue);

  const token = useSelector((state) => state.login.tokenValue);

  const navigate = useNavigate();
  const TokenHandler = () => {
    console.log("fadfa", token);
    dispatch(addTodo(""));
    navigate("/");
  };
  return (
    <Fragment>
      {theme && (
        <div className={classes.mainDIV}>
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
                    <CustomButton
                      label="Home"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>

                <div className={classes.list}>
                  <Link className={classes.Link} to="/Therapists">
                    <CustomButton
                      label="Therapists"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/Treatments">
                    <CustomButton
                      label="Treatments"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/Location">
                    <CustomButton
                      label="Location"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/Reservation">
                    <CustomButton
                      label="Reservation"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.list}>
                  <Link className={classes.Link} to="/AboutUs">
                    <CustomButton
                      label="About us"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.list}>
                  <CustomButton
                    onClick={showSettingsHandler}
                    label="Settings"
                    className="primary"
                  ></CustomButton>
                </div>

                <div className={classes.list}>
                  <CustomButton
                    onClick={TokenHandler}
                    label="Logout"
                    className="primary"
                  ></CustomButton>
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
                    <CustomButton
                      label="Home"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>

                <div className={classes.listL}>
                  <Link className={classes.LinkL} to="/Therapists">
                    <CustomButton
                      label="Therapists"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.listL}>
                  <Link className={classes.LinkL} to="/Treatments">
                    <CustomButton
                      label="Treatments"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.listL}>
                  <Link className={classes.LinkL} to="/Location">
                    <CustomButton
                      label="Location"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.listL}>
                  <Link className={classes.LinkL} to="/Reservation">
                    <CustomButton
                      label="Reservation"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.listL}>
                  <Link className={classes.Link} to="/AboutUs">
                    <CustomButton
                      label="About us"
                      className="primary"
                    ></CustomButton>
                  </Link>
                </div>
                <div className={classes.listL}>
                  <CustomButton
                    onClick={showSettingsHandler}
                    label="Settings"
                    className="primary"
                  ></CustomButton>
                </div>
                <div className={classes.listL}>
                  <CustomButton
                    onClick={TokenHandler}
                    label="Logout"
                    className="primary"
                  ></CustomButton>
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
