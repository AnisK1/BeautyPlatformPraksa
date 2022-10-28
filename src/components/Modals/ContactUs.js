import React from "react";
import classes from "./ContactUs.module.css";
import CustomButton from "../UI/Button";
import { useState } from "react";
import { ClassNames } from "@emotion/react";

const ContactUs = (props) => {
  const [submitted, setSubmitted] = useState(false);

  console.log("handle", submitted);

  return (
    <>
      <div>
        <div className={classes.darkBG} onClick={props.onClose} />
        <div className={classes.centered}>
          <div className={classes.modal}>
            <div className={classes.modalHeader}>
              <h5 className={classes.heading}>Contact us</h5>
            </div>

            <div className={classes.modalContent}>
              <div className={classes.inputContainer}>
                <input
                  className={classes.InpClass}
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <div className={classes.inputContainer}>
                <input
                  className={classes.InpClass}
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className={classes.inputContainer}>
                <textarea
                  className={classes.TextClass}
                  placeholder="Your message"
                  name="message"
                  required
                />
              </div>
              <div className={classes.inputContainer}>
                <CustomButton
                  className={classes.CBTN}
                  onClick={() => {
                    setSubmitted(true);
                  }}
                  label="Send"
                  type="button"
                ></CustomButton>
              </div>
              <div>
                {submitted && (
                  <>
                    <div>Thank you!</div>
                    <div>We'll be in touch soon.</div>
                  </>
                )}
              </div>
            </div>
            <div className={classes.modalActions}>
              <div className={classes.actionsContainer}>
                <CustomButton
                  label="close"
                  onClick={props.onClose}
                  className={classes.CBTN}
                ></CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
