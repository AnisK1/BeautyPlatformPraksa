import classes from "./TreatmentItemForm.module.css";

const TreatmentItemForm = (props) => {
  return (
    <form className={classes.form}>
      <button onClick={props.onClickT} type="button">
        Add
      </button>
    </form>
  );
};

export default TreatmentItemForm;
