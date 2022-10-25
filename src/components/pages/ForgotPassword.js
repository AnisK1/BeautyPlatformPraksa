import React, { useState, useRef } from "react";
import classes from "./ForgotPassword.module.css";
import Button1 from "@mui/material/Button";
import Button from "../UI/Button";
import profile from "../../image/pic2.jpg";
import { Link } from "react-router-dom";
import Cpm from "../Modals/ConfirmPasswordModal";
import axios from "axios";
import CoverIMG from "../../image/LoginCover.jpg";
import CustomButton from "../UI/Button";

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
    <div
      className={classes.main}
      style={{ backgroundImage: `url(${CoverIMG})` }}
    >
      {/* <img src={profile} alt="profile" className={classes.profile} /> */}

      <div className={classes.submain}>
        <div className={classes.question}>
          <label>Not registered yet? </label>
          <Link to="/register">
            <CustomButton
              label="Register"
              className={classes.buttonCSS}
              type="submit"
            >
              Register
            </CustomButton>
          </Link>
        </div>

        <div className={classes.title}>
          <h1>Forgot your password?</h1>
        </div>
        <form onSubmit={SubmitHandler}>
          <div className={classes.FORMDIV}>
            <div className={classes.emailLBL}>
              <label>
                <b>Email</b>
              </label>
            </div>

            <input
              type="text"
              required
              className={classes.name}
              ref={emailInputRef}
            ></input>

            <div className={classes.FP}>
              <CustomButton
                label="Send"
                className={classes.buttonCSS}
                type="submit"
              ></CustomButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
