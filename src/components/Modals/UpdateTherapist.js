import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./UpdateTherapist.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../UI/Button";
import CustomButton from "../UI/Button";

const baseURL = "http://127.0.0.1:8000/api/updateTherapist";

const UpdateTherapist = (props) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState("Update therapist");
  const SkillType = useRef();
  const ID = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredSkillTypeID = SkillType.current.value;
    const enteredID = ID.current.value;

    setLoading(true);
    axios
      .put(baseURL, {
        SkillTypeID: enteredSkillTypeID,
        id: enteredID,
      })
      .then((res) => {
        setLoading(false);

        setResult(res.data.message);
      })
      .catch((error) => {
        /* setLoading(false);
          setError(true); */
      });
  };

  return (
    <>
      <div className={classes.darkBG} onClick={props.onClose} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Update therapist</h5>
          </div>

          <div className={classes.modalContent}>
            <div className={classes.frame}>
              <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.frame}>
                  {/* <div className={classes.positionLBL}>
                    <label>
                      <b>SkillTypeID</b>
                    </label>
                  </div> */}
                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={SkillType}
                      placeholder="SkillTypeID..."
                    ></input>
                  </div>
                  {/*  <div className={classes.positionLBL}>
                    <label>
                      <b>TherapistID</b>
                    </label>
                  </div> */}
                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={ID}
                      placeholder="TherapistID..."
                    ></input>
                  </div>

                  <div className={classes.FP}>
                    <CustomButton
                      label="Update"
                      className={classes.buttonCSS}
                      type="submit"
                      onClick={submitHandler}
                    ></CustomButton>
                  </div>
                  <div className={classes.result}>
                    {loading && (
                      <div className={classes.loader}>
                        <ClipLoader
                          className={classes.spiner}
                          loading={loading}
                          size={60}
                          aria-label="Loading Spinner"
                          data-testid="FadeLoader"
                        />
                      </div>
                    )}
                    <div className={classes.Innerresult}>{result}</div>
                  </div>
                </div>
              </form>
              <div></div>
              <div className={classes.Close}>
                <CustomButton
                  label="Close"
                  className={classes.button}
                  onClick={props.onClose}
                ></CustomButton>
              </div>
            </div>
          </div>

          {/*  <div className={classes.modalActions}>
            <div className={classes.actionsContainer}>
              <CustomButton
                className={classes.deleteBtn}
                onClick={props.onClose}
              >
                Delete
              </CustomButton>
              <CustomButton
                className={classes.cancelBtn}
                onClick={props.onClose}
              >
                Cancel
              </CustomButton>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UpdateTherapist;
