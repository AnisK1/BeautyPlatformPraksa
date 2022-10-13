import { Fragment } from "react";
import Modal from "../UI/Modal";
import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

const Welcome = (props) => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>User created successfully</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <Link to="/">
          <button type="submit" className={classes.button}>
            Go to Login
          </button>
        </Link>
      </div>
    </Modal>
  );
};

export default Welcome;
