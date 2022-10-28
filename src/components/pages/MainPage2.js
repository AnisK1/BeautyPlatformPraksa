import { Fragment, useState } from "react";

import classes from "./MainPage2.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";
import { addTodo } from "../../store/Login-slice";
import { dark } from "../../store/Theme-slice";
import { useDispatch } from "react-redux";
import ContactUs from "../Modals/ContactUs";

import therapistIMG from "../../image/pic3.jpg";
import treatmentIMG from "../../image/pic4.jpg";
import locationIMG from "../../image/pic5.jpg";
import reservationIMG from "../../image/pic6.jpg";
import { useNavigate } from "react-router-dom";

import MainPageIMG from "../../image/MainPageIMG.jpg";
import MainPageIMGL from "../../image/MainPageIMGL.png";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Main2() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [contactUsShow, setContactUsShow] = useState(false);

  const navigate = useNavigate();
  const token = useSelector((state) => state.login.tokenValue);

  const theme = useSelector((state) => state.theme.themeValue);
  console.log("token", token);
  console.log("length", token.length);

  const dispatch = useDispatch();

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const TokenHandler = () => {
    dispatch(addTodo(""));
    navigate("/");
  };
  const showContactusHandler = () => {
    setContactUsShow(true);
  };
  const hideContactusHandler = () => {
    setContactUsShow(false);
  };

  return (
    <>
      {theme && (
        <div className={classes.frg}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {contactUsShow && <ContactUs onClose={hideContactusHandler} />}

          <div className={classes.cover}></div>

          <Header onShowCart={showCartHandler}></Header>
          <main>
            <div className={classes.glavni}>
              <div className={classes.lijevi}>
                <div className={classes.txtPos}>
                  <h1 className={classes.h1}>
                    Professional treatments for you!
                  </h1>
                  <h2>You need beauty treatment for your photo shoot?</h2>
                  <h2>
                    Or you want to decorate yourself for special occasion?
                  </h2>
                  <button
                    onClick={showContactusHandler}
                    style={{ marginTop: "24px" }}
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className={classes.desni}>
                <img
                  className={classes.image}
                  src={MainPageIMG}
                  alt="MainIMG"
                ></img>
              </div>
            </div>
          </main>
          <div className={classes.footer}></div>
        </div>
      )}
      {/* ------------------------------------------------------------------------------------ */}
      {!theme && (
        <div className={classes.frgL}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {contactUsShow && <ContactUs onClose={hideContactusHandler} />}

          <div className={classes.coverL}></div>

          <Header onShowCart={showCartHandler}></Header>
          <main>
            <div className={classes.glavniL}>
              <div className={classes.lijeviL}>
                <div className={classes.txtPosL}>
                  <h1 className={classes.h1L}>
                    Professional treatments for you!
                  </h1>
                  <h2>You need beauty treatment for your photo shoot?</h2>
                  <h2>
                    Or you want to decorate yourself for special occasion?
                  </h2>
                  <button
                    onClick={showContactusHandler}
                    style={{ marginTop: "24px" }}
                  >
                    CONTACT US
                  </button>
                </div>
              </div>
              <div className={classes.desniL}>
                <img
                  className={classes.imageL}
                  src={MainPageIMGL}
                  alt="MainIMG"
                ></img>
              </div>
            </div>
          </main>
          <div className={classes.footerL}></div>
        </div>
      )}
    </>
  );
}

export default Main2;
