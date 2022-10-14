import { Fragment, useState } from "react";

import classes from "./MainPage2.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";

import therapistIMG from "../../image/pic3.jpg";
import treatmentIMG from "../../image/pic4.jpg";
import locationIMG from "../../image/pic5.jpg";
import reservationIMG from "../../image/pic6.jpg";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Main2() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [dateIsShown, setDateIsShown] = useState(false);

  const [adminControl, setAdminControl] = useState(false);

  const token = useSelector((state) => state.tokenValue);
  console.log("grob te", token);

  const showAdminHandler = () => {
    setAdminControl(true);
  };
  const hideAdminHandler = () => {
    setAdminControl(false);
  };
  console.log(adminControl);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showDateHandler = () => {
    setDateIsShown(true);
  };
  const hideDateHandler = () => {
    setDateIsShown(false);
  };
  console.log(dateIsShown);
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {dateIsShown && <DateTime onClose={hideDateHandler} />}
      {adminControl && <AddTreatment onClose={hideAdminHandler} />}

      <Header onShowCart={showCartHandler}></Header>
      <main>
        <div className={classes.glavni}>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Our therapists</h1>

            <img className={classes.image} src={therapistIMG}></img>
            <Link className={classes.LNKC} to="/Therapists">
              <button className={classes.button2}>Therapists</button>
            </Link>
          </div>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Treatments</h1>
            <img className={classes.image} src={treatmentIMG}></img>
            <Link className={classes.LNKC} to="/Treatments">
              <button className={classes.button2}>Treatments</button>
            </Link>
          </div>
        </div>
        <div className={classes.glavni}>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Location</h1>
            <img className={classes.image} src={locationIMG}></img>
            <Link className={classes.LNKC} to="/Location">
              <button className={classes.button2}>Locations</button>
            </Link>
          </div>
          <div className={classes.divs}>
            <h1 className={classes.naslov}>Treatments</h1>
            <img className={classes.image} src={reservationIMG}></img>
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
