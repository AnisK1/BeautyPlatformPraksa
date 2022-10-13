import classes from "./Login.module.css";
import profile from "../../image/pic2.jpg";
import Button from "../UI/Button";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button1 from "@mui/material/Button";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addTodo } from "../../store/Login-slice";
import { SliderValueLabel } from "@mui/material";

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const [value, setValue] = useState("");
  const token = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(token);

  const SubmitHandler = (event) => {
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
              <Button1 type="submit" variant="outlined">
                HELP
              </Button1>
            </Link>
          </div>
          <div>
            {/*
             <Button className={classes.buttonCSS} type="submit">
              Login
            </Button>
  */}
            <Link to="MainPage">
              <Button className={classes.buttonCSS} type="submit">
                Login
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
