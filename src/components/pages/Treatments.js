import { Fragment, useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import classes from "./Treatments.module.css";
import Header from "../Layout/Header";
const DUMMY_TREATMENTS = [
  {
    id: "t1",
    name: "Pedicure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 0.0,
  },
  {
    id: "t2",
    name: "Manicure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 0.0,
  },
  {
    id: "t3",
    name: " Haircut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 0.0,
  },
  {
    id: "t1",
    name: "Pedicure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 0.0,
  },
  {
    id: "t2",
    name: "Manicure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 0.0,
  },
  {
    id: "t3",
    name: " Haircut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 0.0,
  },
];

const baseURL = "http://127.0.0.1:8000/api/allTreatments";

function Main() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const theme = useSelector((state) => state.theme.themeValue);

  const treatmentsList = DUMMY_TREATMENTS.map((treatment) => (
    <div className={classes.main}>
      <h1 className={classes.name}>{treatment.name}</h1>
      <div className={classes.description}>{treatment.description}</div>
      <div className={classes.price}>
        <h2>{treatment.price}$</h2>
      </div>
    </div>
  ));
  const treatmentsListL = DUMMY_TREATMENTS.map((treatment) => (
    <div className={classes.mainL}>
      <h1 className={classes.nameL}>{treatment.name}</h1>
      <div className={classes.descriptionL}>{treatment.description}</div>
      <div className={classes.priceL}>
        <h2>{treatment.price}$</h2>
      </div>
    </div>
  ));

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
    <>
      {theme && (
        <>
          <div className={classes.frame}>
            <Header></Header>
            <div className={classes.position}>
              <ul>{treatmentsList}</ul>
            </div>
          </div>
          <div className={classes.cover}></div>
        </>
      )}
      {!theme && (
        <div className={classes.frameL}>
          <Header></Header>
          <ul>{treatmentsListL}</ul>
          <div className={classes.cover}></div>
        </div>
      )}
    </>
  );
}

export default Main;
