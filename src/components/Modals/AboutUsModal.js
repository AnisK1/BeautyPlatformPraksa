import React from "react";
import classes from "./AboutUsModal.module.css";
import CustomButton from "../UI/Button";
import viber from "../../image/viber.png";
import facebook from "../../image/facebook.png";

const AboutUsModal = (props) => {
  return (
    <>
      <div className={classes.darkBG} onClick={props.onClose} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Contact informations</h5>
          </div>

          <div className={classes.modalContent}>
            <div className={classes.mainFrame}>
              <div
                className={classes.viberCLS}
                style={{ backgroundImage: `url(${viber})` }}
              ></div>
              <div className={classes.viberCLS}>
                <h2>665 525 1820</h2>
              </div>
              <div
                className={classes.viberCLS}
                style={{ backgroundImage: `url(${facebook})` }}
              ></div>
            </div>

            <div className={classes.modalActions}>
              <div className={classes.actionsContainer}>
                <CustomButton
                  label="Close"
                  className={classes.cancelBtn}
                  onClick={props.onClose}
                ></CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsModal;
