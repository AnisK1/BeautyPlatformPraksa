import classes from "./Login.module.css";
import profile from "../../image/pic2.jpg";
import CoverIMG from "../../image/LoginCover.jpg";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button1 from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addTodo } from "../../store/Login-slice";
import { dark, light } from "../../store/Theme-slice";
import { SliderValueLabel } from "@mui/material";
import CustomButton from "../UI/Button";

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [value, setValue] = useState(true);
  const [error, setError] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const token = useSelector((state) => state.login.tokenValue);

  const dispatch = useDispatch();
  console.log("token", token);
  const navigate = useNavigate();

  const themeD = useSelector((state) => state.theme.themeValue);

  console.log("themeD", themeD);

  const dispatchHandlerD = async (event) => {
    event.preventDefault();

    dispatch(dark(true));
    console.log("themeD", themeD);
  };
  const dispatchHandlerL = async (event) => {
    event.preventDefault();

    dispatch(dark(false));
  };

  const SubmitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    axios
      .post(
        "/login",
        {
          email: enteredEmail,
          password: enteredPassword,
        },
        {
          headers: {
            mode: "cors",
          },
        }
      )
      .then((data) => {
        console.log(data);
        setValue(data.data.token);
        console.log(data.data.token);
        dispatch(addTodo(data.data.token));
        navigate("/MainPage2");
      })
      .catch((error) => {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data.message);
          setErrorMessage(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
      });
  };

  return (
    <div
      className={classes.main}
      style={{ backgroundImage: `url(${CoverIMG})` }}
    >
      {/* <img src={profile} alt="profile" className={classes.profile} /> */}

      <div className={classes.submain}>
        <div className={classes.AA}>
          <div className={classes.questionFRAME}>
            <label>Not registered yet? </label>

            <Link to="/register">
              <CustomButton
                label="Register"
                className={classes.buttonCSS}
                type="submit"
              ></CustomButton>
            </Link>
          </div>
        </div>
        <div className={classes.title}>
          <h1>Log in</h1>
        </div>
        <form onSubmit={SubmitHandler}>
          <div className={classes.FORMDIV}>
            <div className={classes.EmailLBL}>
              <label>
                <b>Email</b>
              </label>
            </div>
            <div className={classes.emailINP}>
              <input
                type="text"
                className={classes.name}
                required
                name="Email"
                ref={emailInputRef}
              ></input>
            </div>
            <div className={classes.passwordLBL}>
              <label>
                <b>Pasword</b>
              </label>
            </div>
            <div className={classes.passwordINP}>
              <input
                type="password"
                className={classes.name}
                required
                ref={passwordInputRef}
              ></input>
            </div>

            {errorMessage && (
              <div className={classes.error}> {errorMessage}</div>
            )}

            <div>
              <CustomButton
                label="Login"
                className={classes.buttonCSS}
                type="submit"
              >
                Login
              </CustomButton>
            </div>

            <div className={classes.FP}>
              <div className={classes.FYPLBL}>
                <label>Forgot your password? </label>
              </div>
              <div className={classes.FPBTN}>
                <Link to="/ForgotPassword">
                  <CustomButton
                    label="Contact us"
                    className={classes.buttonCSS}
                    type="submit"
                  ></CustomButton>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
