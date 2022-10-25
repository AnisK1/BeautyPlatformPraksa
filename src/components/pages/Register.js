import React, { useState, useRef, useEffect } from "react";
import classes from "./Register.module.css";
import Button from "../UI/Button";
import profile from "../../image/pic2.jpg";
import Button1 from "@mui/material/Button";
import { json, Link } from "react-router-dom";
import axios from "../Auth/axiosSetup";
import { render } from "@testing-library/react";
import Modal from "../UI/Modal";
import Welcome from "../Modals/Welcome";
import CoverIMG from "../../image/LoginCover.jpg";
import CustomButton from "../UI/Button";

const Register = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [userAdded, setUserAdded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredName);

    axios
      .post(
        "/register",
        {
          name: enteredName,
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
        if (data.status) {
          console.log("User added");
          setUserAdded(true);
          console.log(userAdded);
        }
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

  const hideUserAddedHandler = () => {
    setUserAdded(false);
  };

  return (
    <div
      className={classes.main}
      style={{ backgroundImage: `url(${CoverIMG})` }}
    >
      {/* <img src={profile} alt="profile" className={classes.profile} /> */}

      <div className={classes.submain}>
        <div className={classes.questionFRAME}>
          <div className={classes.question}>
            <label>Already have an account? </label>
            <Link to="/">
              <CustomButton
                label="Login"
                className={classes.buttonCSS}
                type="submit"
              ></CustomButton>
            </Link>
          </div>
        </div>

        <div className={classes.title}>
          <h1>Register</h1>
        </div>

        <form onSubmit={submitHandler}>
          <div className={classes.FORMDIV}>
            <div className={classes.nameLBL}>
              <label>
                <b>Name</b>
              </label>
            </div>
            <div className={classes.nameINP}>
              <input
                type="text"
                name="email"
                id="email"
                required
                ref={nameInputRef}
              />
            </div>
            {/*
          <label for="email">
            <b>Last name</b>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            onChange={lastNameChangeHandler}
          />
  */}
            <div className={classes.emailLBL}>
              <label>
                <b>Email</b>
              </label>
            </div>
            <div className={classes.emailINP}>
              <input
                type="text"
                name="email"
                id="email"
                required
                ref={emailInputRef}
              />
            </div>
            <div className={classes.passwordLBL}>
              <label>
                <b>Password</b>
              </label>
            </div>
            <div className={classes.passwordINP}>
              <input
                type="password"
                name="psw"
                id="psw"
                required
                ref={passwordInputRef}
              />
            </div>
            {errorMessage && (
              <div className={classes.error}> {errorMessage}</div>
            )}

            {/*
          <label for="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            name="psw-repeat"
            id="psw-repeat"
            required
            onChange={passwordConfChangeHandler}
          />
  */}
            <div className={classes.RegisterBTN}>
              <CustomButton
                label="Register"
                className={classes.buttonCSS}
                type="submit"
              ></CustomButton>
            </div>
            {userAdded && <Welcome onClose={hideUserAddedHandler} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
