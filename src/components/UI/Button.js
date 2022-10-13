import React from "react";
import classes from "../UI/Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.OnClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
