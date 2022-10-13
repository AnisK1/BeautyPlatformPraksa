import { Fragment } from "react";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./ConfirmPasswordModal.module.css";

const Cpm = (props) => {
  return (
    <Modal>
      <form className={classes.frame}>
        <label>
          <b>Password</b>
        </label>
        <input type="password" required></input>
        <label>
          <b>Confirm pasword</b>
        </label>
        <input type="password" required></input>

        <div>
          <button type="submit" className={classes.dugmic}>
            Login
          </button>
          <button type="submit" className={classes.dugmic}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Cpm;
