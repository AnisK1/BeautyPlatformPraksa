import classes from "./ResetPassword.module.css";
import profile from "../../image/pic2.jpg";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button1 from "@mui/material/Button";
import axios from "axios";
import CoverIMG from "../../image/LoginCover.jpg";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import CustomButton from "../UI/Button";

const ResetPassword = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const ConfirmedPasswordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  /* 
  const query = new URLSearchParams(this.props.location.search);

  const tokenValue = query.get("token");
  console.log("token iz stringa", tokenValue); //123 */

  const paramsInfo = useParams();
  console.log("paramsInfo", JSON.stringify(paramsInfo));

  console.log("samoTOken", paramsInfo.token);

  console.log("email", paramsInfo.token.slice(76));
  console.log("token", paramsInfo.token.slice(6, 70));

  /*  const token = paramsInfo.token.slice(6, 70);
  const email = paramsInfo.token.slice(76); */

  const token = paramsInfo.token.slice(6, 70);
  const email = paramsInfo.token.slice(76);

  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmedPassword = ConfirmedPasswordInputRef.current.value;
    //ceka se da backend ispravi zato saljem token na ovaj nacin(ovaj token nije validan)
    axios
      .post(
        "http://127.0.0.1:8000/api/reset/password",
        {
          email: email,
          password: enteredPassword,
          password_confirmation: enteredConfirmedPassword,
          token: token,
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
    <div
      className={classes.main}
      style={{ backgroundImage: `url(${CoverIMG})` }}
    >
      {/* <img src={profile} alt="profile" className={classes.profile} /> */}

      <div className={classes.submain}>
        <div className={classes.posTitle}>
          <h1>Reset password</h1>
        </div>

        <form onSubmit={SubmitHandler}>
          <div className={classes.FORMDIV}>
            <div className={classes.LBL}>
              <label>Password</label>
            </div>

            <input
              type="password"
              className={classes.name}
              required
              ref={passwordInputRef}
            ></input>
            <div className={classes.LBL}>
              <label>Confirm pasword</label>
            </div>
            <input
              type="password"
              className={classes.name}
              required
              ref={ConfirmedPasswordInputRef}
            ></input>

            <div className={classes.BTNCTRL}>
              <CustomButton
                label="Reset"
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

export default ResetPassword;
