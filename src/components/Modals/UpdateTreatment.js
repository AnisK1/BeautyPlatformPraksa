import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./UpdateTreatment.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../UI/Button";
import CustomButton from "../UI/Button";

const baseURL = "http://127.0.0.1:8000/api/updateTreatment";

const UpdateTreatment = (props) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState("Update treatment");
  const price = useRef();
  const duration = useRef();
  const description = useRef();
  const id = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredPrice = price.current.value;
    const enteredDuration = duration.current.value;
    const enteredDescription = description.current.value;
    const enteredID = id.current.value;

    setLoading(true);
    axios
      .put(baseURL, {
        price: enteredPrice,
        Duration: enteredDuration,
        Description: enteredDescription,
        id: enteredID,
      })
      .then((res) => {
        setLoading(false);

        setResult(res.data.message);
        console.log("REZULTAT", res);
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
            <h5 className={classes.heading}>Update treatment</h5>
          </div>

          <div className={classes.modalContent}>
            <div className={classes.frame}>
              <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.frame}>
                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={price}
                      placeholder="Price..."
                    ></input>
                  </div>

                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={duration}
                      placeholder="Duration..."
                    ></input>
                  </div>

                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={description}
                      placeholder="Description..."
                    ></input>
                  </div>

                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={id}
                      placeholder="ID..."
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
              <div className={classes.Close}></div>
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

export default UpdateTreatment;
