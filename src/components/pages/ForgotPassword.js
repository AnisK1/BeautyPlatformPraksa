import React, { useState, useRef } from "react";
import classes from "./ForgotPassword.module.css";
import Button1 from "@mui/material/Button";
import Button from "../UI/Button";
import profile from "../../image/pic2.jpg";
import { Link } from "react-router-dom";
import Cpm from "../Modals/ConfirmPasswordModal";
import axios from "axios";

const ForgotPassword = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const emailInputRef = useRef();

  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    axios
      .post(
        "http://127.0.0.1:8000/api/forgot/password",
        {
          email: enteredEmail,
        },
        {
          headers: {
            mode: "cors",
          },
        }
      )
      .then((data) => {
        console.log(data);
        if (data.status) {
          console.log("User added");
          setIsClicked(true);
          console.log(isClicked);
        }
      })
      .catch((error) => {});
  };

  return (
    <div className={classes.main}>
      <img src={profile} alt="profile" className={classes.profile} />

      <div className={classes.submain}>
        <div className={classes.question}>
          <label>Not registered yet? </label>
          <Link to="/register">
            <Button1 type="submit" variant="outlined">
              Register
            </Button1>
          </Link>
        </div>

        <div className={classes.title}>
          <h1>Forgot your password?</h1>
        </div>
        <form onSubmit={SubmitHandler}>
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            required
            className={classes.name}
            ref={emailInputRef}
          ></input>

          <div className={classes.FP}>
            <Button className={classes.buttonCSS} type="submit">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
