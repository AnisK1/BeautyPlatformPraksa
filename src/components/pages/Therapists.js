import { Fragment, useState, useEffect } from "react";
import axios from "axios";

import classes from "./Therapists.module.css";
import Header from "../Layout/Header";
import Treatments from "../Treatments/Treatments";
import Cart from "../Cart/Cart";
import DateTime from "./DateTime";
import AddTreatment from "./AddTreatment";

import { Link } from "react-router-dom";
import Card from "../UI/Card";

import Maleimg from "../../image/pic9.jpg";
import Femaleimg from "../../image/pic8.png";

import { useSelector } from "react-redux";

const baseURL = "http://127.0.0.1:8000/api/allTherapist";
function Main() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [therapistPost, setTherapistPost] = useState([]);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const theme = useSelector((state) => state.theme.themeValue);
  console.log("TOKEN", theme);

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
        setTherapistPost(res.data.data.therapists);
        console.log("post", res);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  const TherapistsList = therapistPost.map((therapists, index) => {
    return therapists ? (
      <div className={classes.okvir}>
        <div className={classes.AllTherapists}>
          <div className={classes.imageW}>
            <img className={classes.image} src={Maleimg}></img>
          </div>
          <div className={classes.therapists}>ID:{therapists.id}</div>

          <div className={classes.therapists}>
            First name:{therapists.FirstName}
          </div>

          <div className={classes.therapists}>
            Last name:{therapists.LastName}
          </div>
        </div>
      </div>
    ) : null;
  });
  const TherapistsListL = therapistPost.map((therapists, index) => {
    return therapists ? (
      <div className={classes.okvirL}>
        <div className={classes.AllTherapistsL}>
          <div className={classes.imageW}>
            <img className={classes.image} src={Maleimg}></img>
          </div>
          <div className={classes.therapists}>ID:{therapists.id}</div>

          <div className={classes.therapists}>
            First name:{therapists.FirstName}
          </div>

          <div className={classes.therapists}>
            Last name:{therapists.LastName}
          </div>
        </div>
      </div>
    ) : null;
  });
  console.log("TERAPEUTI", TherapistsList);

  return (
    <>
      {theme && (
        <div className={classes.main}>
          <Header onShowCart={showCartHandler}></Header>
          <div className={classes.cover}></div>

          <div>{TherapistsList}</div>
        </div>
      )}
      {!theme && (
        <div className={classes.frameL}>
          <Header onShowCart={showCartHandler}></Header>
          <div className={classes.cover}></div>
          <div>{TherapistsListL}</div>
        </div>
      )}
    </>
  );
}

export default Main;
