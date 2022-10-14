import { Fragment, useState } from "react";

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
];

function Main() {
  const treatmentsList = DUMMY_TREATMENTS.map((treatment) => (
    <div className={classes.main}>
      <h1 className={classes.name}>{treatment.name}</h1>
      <div className={classes.description}>{treatment.description}</div>
      <div className={classes.price}>
        <h2>{treatment.price}$</h2>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Header></Header>
      <ul>{treatmentsList}</ul>
    </Fragment>
  );
}

export default Main;
