import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./DeleteReservation.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../UI/Button";
import CustomButton from "../UI/Button";

const baseURL = "http://127.0.0.1:8000/api/deleteReservation/";

const DeleteReservation = (props) => {
  const IDInputRef = useRef();

  const [post, setPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const SearchName = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredID = IDInputRef.current.value;

    setLoading(true);
    axios
      .delete(baseURL + enteredID)
      .then((res) => {
        // check status for response and set data accordingly
        setPost(res.data.success);
        // log the data
        //console.log("search", res);
        // console.log("search", res.data);
        //console.log("search", res.data.success);

        setLoading(false);
      })
      .catch((error) => {
        /* setLoading(false);
          setError(true); */
      });
  };

  let result = "Reservation deleted successfully";

  return (
    <>
      <div className={classes.darkBG} onClick={props.onClose} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Delete reservation by ID</h5>
          </div>

          <div className={classes.modalContent}>
            <div className={classes.frame}>
              <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.frame}>
                  {/* <div className={classes.positionLBL}>
                    <label>
                      <b>Name</b>
                    </label>
                  </div> */}
                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={IDInputRef}
                      placeholder="ID"
                    ></input>
                  </div>

                  <div className={classes.FP}>
                    <CustomButton
                      label="Delete"
                      className={classes.buttonCSS}
                      type="submit"
                    ></CustomButton>
                  </div>
                  <div className={classes.result}>
                    <div className={classes.Innerresult}>
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
                      {post && <h1>{result}</h1>}
                    </div>
                  </div>
                </div>
              </form>

              <CustomButton
                label="Close"
                className={classes.button}
                onClick={props.onClose}
              ></CustomButton>
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

export default DeleteReservation;
