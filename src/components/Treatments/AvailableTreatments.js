import React, { useState } from "react";

import classes from "./AvailableTreatments.module.css";
import Card from "../UI/Card";
import TreatmentItem from "./TreatmentItem/TreatmentItem";

import Button from "../UI/Button";

const DUMMY_TREATMENTS = [
  {
    id: "t1",
    name: "Pedicure",
    description: "",
    price: 0.0,
  },
  {
    id: "t2",
    name: "Manicure",
    description: "",
    price: 0.0,
  },
  {
    id: "t3",
    name: " Haircut",
    description: "",
    price: 0.0,
  },
];

const AvailableTreatments = (props) => {
  const [IsAdmin, setIsAdmin] = useState(true);

  const treatmentsList = DUMMY_TREATMENTS.map((treatment) => (
    <TreatmentItem
      key={treatment.id}
      name={treatment.name}
      description={treatment.description}
      price={treatment.price}
      onClickT={props.onClickT}
    ></TreatmentItem>
  ));
  return (
    <section className={classes.treatments}>
      <Card>
        <ul>{treatmentsList}</ul>
      </Card>
      {/*
      {IsAdmin && (
        <div className={classes.addButton}>
          <link to="/AdminPage">
            <button className={classes.button} onClick={props.onClickA}>
              ADD TREATMENT
            </button>
          </link>
        </div>
      )}
      */}
    </section>
  );
};

export default AvailableTreatments;
