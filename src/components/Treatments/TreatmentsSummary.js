import classes from "./TreatmentsSummary.module.css";
import AvailableTreatments from "./AvailableTreatments";

const TreatmentSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Beauty treatments for you!</h2>
      <p>Choose your treatment from our list of available treatments.</p>
    </section>
  );
};

export default TreatmentSummary;
