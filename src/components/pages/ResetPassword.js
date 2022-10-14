import classes from "./Login.module.css";
import profile from "../../image/pic2.jpg";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button1 from "@mui/material/Button";
import axios from "axios";

const ResetPassword = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ConfirmedPasswordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmedPassword = ConfirmedPasswordInputRef.current.value;
    //ceka se da backend ispravi zato saljem token na ovaj nacin(ovaj token nije validan)
    const enteredToken =
      "7e758f502b7921f6c83393d4f4637a08d38a293cd1e96ebdfeded72b08b3e885";

    axios
      .post(
        "http://127.0.0.1:8000/api/reset/password",
        {
          email: enteredEmail,
          password: enteredPassword,
          password_confirmation: enteredConfirmedPassword,
          token: enteredToken,
        },
        {
          headers: {
            mode: "cors",
          },
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {});
  };

  return (
    <div className={classes.main}>
      <img src={profile} alt="profile" className={classes.profile} />

      <div className={classes.submain}>
        <div className={classes.title}>
          <h1>Reset password</h1>
        </div>
        <form onSubmit={SubmitHandler}>
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            className={classes.name}
            required
            ref={emailInputRef}
          ></input>
          <label>
            <b>Pasword</b>
          </label>
          <input
            type="password"
            className={classes.name}
            required
            ref={passwordInputRef}
          ></input>
          <label>
            <b>Confirm pasword</b>
          </label>
          <input
            type="password"
            className={classes.name}
            required
            ref={ConfirmedPasswordInputRef}
          ></input>

          <div>
            {/*
            <Button className={classes.buttonCSS} type="submit">
              Login
            </Button>
  */}

            <Button className={classes.buttonCSS} type="submit">
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
