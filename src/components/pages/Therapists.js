import { Fragment, useState, useEffect } from "react";
import axios from "axios";

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

const baseURL = "http://127.0.0.1:8000/api/allTherapist";
function Main() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const theme = useSelector((state) => state.theme.themeValue);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(baseURL)
      .then((res) => {
        // check status for response and set data accordingly
        //setPost(res.data.data.users);
        // log the data
        console.log("post", res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <Fragment>
      {theme && (
        <div>
          <Header onShowCart={showCartHandler}></Header>
          <div className={classes.cover}></div>
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      )}
      {!theme && (
        <div className={classes.frameL}>
          <Header onShowCart={showCartHandler}></Header>
          <div className={classes.cover}></div>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <div className={classes.therapistsCVR}>
            {" "}
            <img className={classes.image} src={Maleimg}></img>
            <div className={classes.innerdivL}>
              <h1>Lastname</h1>
              <h3>Name</h3>
              <h2>Years</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={classes.therapistsCVR}>
            {" "}
            <img className={classes.image} src={Femaleimg}></img>
            <div className={classes.innerdivL}>
              <h1>Lastname</h1>
              <h3>Name</h3>
              <h2>Years</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={classes.therapistsCVR}>
            {" "}
            <img className={classes.image} src={Maleimg}></img>
            <div className={classes.innerdivL}>
              <h1>Lastname</h1>
              <h3>Name</h3>
              <h2>Years</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={classes.therapistsCVR}>
            {" "}
            <img className={classes.image} src={Femaleimg}></img>
            <div className={classes.innerdivL}>
              <h1>Lastname</h1>
              <h3>Name</h3>
              <h2>Years</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Main;
