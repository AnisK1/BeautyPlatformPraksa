import { useDispatch, useSelector } from "react-redux";
import classes from "./Settings.module.css";
import { useNavigate } from "react-router-dom";

import Modal from "../UI/Modal";
import { dark } from "../../store/Theme-slice";
import CustomButton from "../UI/Button";
import { RiCloseLine } from "react-icons/ri";
import { Button } from "@mui/material";

const Welcome = (props, { setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const themeD = useSelector((state) => state.theme.themeValue);

  const NavigateTo = () => {
    navigate("/AdminPage");
  };

  const dispatchHandlerD = async (event) => {
    event.preventDefault();

    dispatch(dark(true));
    console.log("themeD", themeD);
  };
  const dispatchHandlerL = async (event) => {
    event.preventDefault();

    dispatch(dark(false));
  };

  return (
    <>
      <div className={classes.darkBG} onClick={props.onClose} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Settings</h5>
          </div>

          <div className={classes.modalContent}>
            <div className={classes.main}>
              <div className={classes.left}>
                <CustomButton
                  className={classes.btn}
                  label="Light mode"
                  onClick={dispatchHandlerL}
                ></CustomButton>
                <CustomButton
                  className={classes.btn}
                  label="Dark mode"
                  onClick={dispatchHandlerD}
                ></CustomButton>
              </div>
              <div className={classes.right}>
                <CustomButton
                  className={classes.btn}
                  label="Admin Panel"
                  onClick={NavigateTo}
                ></CustomButton>
              </div>
            </div>
            <div className={classes.close}>
              <CustomButton
                label="CLOSE"
                className={classes.btn}
                onClick={props.onClose}
              ></CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
