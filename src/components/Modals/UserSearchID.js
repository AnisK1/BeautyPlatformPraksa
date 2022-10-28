import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./UserSearchID.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../UI/Button";
import CustomButton from "../UI/Button";

const baseURL = "http://127.0.0.1:8000/api/allUser/";

const UserSearchID = (props) => {
  const IDInputRef = useRef();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const SearchName = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredID = IDInputRef.current.value;

    setLoading(true);
    axios
      .get(baseURL + enteredID)
      .then((res) => {
        // check status for response and set data accordingly
        setPost(res.data.data.user);
        // log the data
        console.log("search", res.data.data.user);
        // console.log("Name", post.name);
        setLoading(false);
        console.log("post", post);
      })
      .catch((error) => {
        /* setLoading(false);
          setError(true); */
      });
  };
  const data = Object.values(post);
  console.log("data array", data);

  let result = "no results found";

  if (post.length !== 0) {
    result = data.map((post, index) => {
      return (
        <li key={index} className={classes.frame}>
          <div className={classes.AllUsers}>
            <div className={classes.treatment}>ID:{data[0]}</div>

            <div className={classes.treatment}>Name:{data[1]}</div>

            <div className={classes.treatment}>Email:{data[2]}</div>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <div className={classes.darkBG} onClick={props.onClose} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Search users by ID</h5>
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
                      placeholder="ID..."
                    ></input>
                  </div>

                  <div className={classes.FP}>
                    <CustomButton
                      label="Search"
                      className={classes.buttonCSS}
                      type="submit"
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

export default UserSearchID;
