import React from "react";
import classes from "../UI/Button.module.css";

const CustomButton = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

export default CustomButton;
