import classes from "./Card.module.css";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Card = (props) => {
  const theme = useSelector((state) => state.theme.themeValue);

  return (
    <>
      {theme && <div className={classes.card}>{props.children}</div>}
      {!theme && <div className={classes.cardL}>{props.children}</div>}
    </>
  );
};

export default Card;
