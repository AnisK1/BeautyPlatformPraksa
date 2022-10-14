import { Fragment, useState } from "react";

import classes from "./Therapists.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";

import { Link } from "react-router-dom";

import Maleimg from "../../image/pic9.jpg";
import Femaleimg from "../../image/pic8.png";

import { useSelector } from "react-redux";

function Main() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const token = useSelector((state) => state.tokenValue);
  console.log("grob te", token);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler}></Header>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <div className={classes.therapistsCVR}>
        {" "}
        <img className={classes.image} src={Maleimg}></img>
        <div className={classes.innerdiv}>
          <h1>Lastname</h1>
          <h3>Name</h3>
          <h2>Years</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={classes.therapistsCVR}>
        {" "}
        <img className={classes.image} src={Femaleimg}></img>
        <div className={classes.innerdiv}>
          <h1>Lastname</h1>
          <h3>Name</h3>
          <h2>Years</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={classes.therapistsCVR}>
        {" "}
        <img className={classes.image} src={Maleimg}></img>
        <div className={classes.innerdiv}>
          <h1>Lastname</h1>
          <h3>Name</h3>
          <h2>Years</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={classes.therapistsCVR}>
        {" "}
        <img className={classes.image} src={Femaleimg}></img>
        <div className={classes.innerdiv}>
          <h1>Lastname</h1>
          <h3>Name</h3>
          <h2>Years</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
