import image from "../../image/pic10.png";
import classes from "./ErrorPage404.module.css";

const ErrorPage404 = () => {
  return (
    <>
      <div className={classes.main}>
        <img src={image} alt="Treatment"></img>
      </div>
    </>
  );
};

export default ErrorPage404;
