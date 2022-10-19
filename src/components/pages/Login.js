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

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [value, setValue] = useState(true);

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
            <Button className={classes.buttonCSS} type="submit">
              Register
            </Button>
          </Link>
        </div>

        <div className={classes.title}>
          <h1>Log in</h1>
        </div>
        <form onSubmit={SubmitHandler}>
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            className={classes.name}
            required
            name="Email"
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
          <div className={classes.FP}>
            <label className={classes.forgotP}>Forgot your password? </label>
            <Link to="/ForgotPassword">
              <Button className={classes.buttonCSS} type="submit">
                CONTACT US
              </Button>
            </Link>
          </div>
          <div>
            {/*
             <Link to="MainPage2">
              <Button className={classes.buttonCSS} type="submit">
                Login
              </Button>
            </Link>
  */}
            <Button className={classes.buttonCSS} type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
