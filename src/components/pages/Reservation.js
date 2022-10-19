import { Fragment, useState } from "react";

import classes from "./Reservation.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";
import FooterB from "../Layout/Footer";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Reservation() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [dateIsShown, setDateIsShown] = useState(false);

  const [adminControl, setAdminControl] = useState(false);

  const theme = useSelector((state) => state.theme.themeValue);

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
      {theme && (
        <div>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {dateIsShown && <DateTime onClose={hideDateHandler} />}
          {adminControl && <AddTreatment onClose={hideAdminHandler} />}
          <div className={classes.cover}></div>

          <Header onShowCart={showCartHandler}></Header>
          <main>
            <Treatments
              onShowDate={showDateHandler}
              onShowAdmin={showAdminHandler}
            ></Treatments>

            {/* <div className={classes.addButton}>
              <Link to="/AdminPage">
                <button className={classes.button}>ADMIN PANEL</button>
              </Link>
            </div> */}
          </main>
        </div>
      )}
      {!theme && (
        <div className={classes.frameL}>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          {dateIsShown && <DateTime onClose={hideDateHandler} />}
          {adminControl && <AddTreatment onClose={hideAdminHandler} />}
          <div className={classes.cover}></div>

          <Header onShowCart={showCartHandler}></Header>
          <main>
            <Treatments
              onShowDate={showDateHandler}
              onShowAdmin={showAdminHandler}
            ></Treatments>

            {/* <div className={classes.addButton}>
              <Link to="/AdminPage">
                <button className={classes.button}>ADMIN PANEL</button>
              </Link>
            </div> */}
          </main>
        </div>
      )}
    </Fragment>
  );
}

export default Reservation;
