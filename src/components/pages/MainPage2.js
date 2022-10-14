import { Fragment, useState } from "react";

import classes from "./MainPage2.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";
import { addTodo } from "../../store/Login-slice";
import { useDispatch } from "react-redux";

import therapistIMG from "../../image/pic3.jpg";
import treatmentIMG from "../../image/pic4.jpg";
import locationIMG from "../../image/pic5.jpg";
import reservationIMG from "../../image/pic6.jpg";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Main2() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenValue);
  console.log("grob te", token);
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

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler}></Header>
      <main>
        <button onClick={TokenHandler}>LOGOUT</button>
        <div className={classes.glavni}>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Our therapists</h1>

            <img
              className={classes.image}
              src={therapistIMG}
              alt="Therapist"
            ></img>
            <Link className={classes.LNKC} to="/Therapists">
              <button className={classes.button2}>Therapists</button>
            </Link>
          </div>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Treatments</h1>
            <img
              className={classes.image}
              src={treatmentIMG}
              alt="Treatment"
            ></img>
            <Link className={classes.LNKC} to="/Treatments">
              <button className={classes.button2}>Treatments</button>
            </Link>
          </div>
        </div>
        <div className={classes.glavni}>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Location</h1>
            <img
              className={classes.image}
              src={locationIMG}
              alt="Location"
            ></img>
            <Link className={classes.LNKC} to="/Location">
              <button className={classes.button2}>Locations</button>
            </Link>
          </div>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Make reservation</h1>
            <img
              className={classes.image}
              src={reservationIMG}
              alt="Reservation"
            ></img>
            <Link className={classes.LNKC} to="/Reservation">
              <button className={classes.button2}>Make reservation</button>
            </Link>
          </div>
        </div>
        <div className={classes.addButton}>
          <Link className={classes.LNKC} to="/AdminPage">
            <button className={classes.button}>ADMIN PANEL</button>
          </Link>
        </div>
      </main>
    </Fragment>
  );
}

export default Main2;
