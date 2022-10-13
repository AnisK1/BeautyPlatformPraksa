import Modal from "../UI/Modal";
import { useState } from "react";
import classes from "./AddTreatment.module.css";

const AddTreatment = (props) => {
  console.log(props.OnClose);

  return (
    <Modal className={classes.frame}>
      <div>
        <form>
          <label>
            <b>Treatment name</b>
          </label>
          <input type="text" className={classes.name} required></input>
          <label>
            <b>Treatment price</b>
          </label>
          <input type="password" className={classes.name} required></input>

          <div>
            <button className={classes.button} type="submit">
              ADD
            </button>
            <button
              className={classes.button}
              onClick={props.onClose}
              type="button"
            >
              Close
            </button>
            {/*
            <Link to="MainPage">
              <Button className={classes.buttonCSS} type="submit">
                Login
              </Button>
            </Link>
  */}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddTreatment;
