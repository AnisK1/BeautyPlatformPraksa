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

const Register = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [userAdded, setUserAdded] = useState(false);

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
      .catch((error) => {});
  };

  const hideUserAddedHandler = () => {
    setUserAdded(false);
  };

  return (
    <div className={classes.main}>
      <img src={profile} alt="profile" className={classes.profile} />

      <div className={classes.submain}>
        <div className={classes.question}>
          <label>Already have an account? </label>
          <Link to="/">
            <Button1 type="submit" variant="outlined">
              login
            </Button1>
          </Link>
        </div>

        <div className={classes.title}>
          <h1>Register</h1>
        </div>

        <form onSubmit={submitHandler}>
          <label>
            <b>Name</b>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            ref={nameInputRef}
          />
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
          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            required
            ref={emailInputRef}
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            name="psw"
            id="psw"
            required
            ref={passwordInputRef}
          />
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

          <Button className={classes.buttonCSS} type="submit">
            Register
          </Button>
          {userAdded && <Welcome onClose={hideUserAddedHandler} />}
        </form>
      </div>
    </div>
  );
};

export default Register;
