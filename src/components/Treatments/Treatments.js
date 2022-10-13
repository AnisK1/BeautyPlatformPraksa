import { Fragment } from "react";
import TreatmentSummary from "./TreatmentsSummary";
import AvailableTreatments from "./AvailableTreatments";
/* import { Button } from "@mui/material"; */

const Treatments = (props) => {
  return (
    <Fragment>
      <TreatmentSummary></TreatmentSummary>
      <AvailableTreatments
        onClickT={props.onShowDate}
        onClickA={props.onShowAdmin}
      ></AvailableTreatments>
    </Fragment>
  );
};

export default Treatments;
