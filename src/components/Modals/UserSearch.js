import { Fragment } from "react";
import axios from "axios";
import Modal from "../UI/Modal";
import { Link } from "react-router-dom";
import classes from "./UserSearch.module.css";
import { useState, useEffect, useRef } from "react";
import Card from "../UI/Card";
import ClipLoader from "react-spinners/ClipLoader";
import Button from "../UI/Button";
import CustomButton from "../UI/Button";

const baseURL = "http://127.0.0.1:8000/api/search/";

const UserSearch = (props) => {
  const nameInputRef = useRef();

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const SearchName = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const id = 0;

    setLoading(true);
    axios
      .get(baseURL + enteredName)
      .then((res) => {
        // check status for response and set data accordingly
        setPost(res.data.data.user);
        // log the data
        console.log("search", res.data.data.user);
        console.log("Name", post.name);
        setLoading(false);
        console.log("responese", res);
      })
      .catch((error) => {
        /* setLoading(false);
          setError(true); */
      });
  };

  /*  let result = "no results found";

  if (post.length !== 0) {
    result = post.map((post, index) => {
      console.log("post2", post);
      return (
        <li key={index} className={classes.frame}>
          <div className={classes.AllTreatments}>
            <div className={classes.treatment}>ID:{post?.id}</div>

            <div className={classes.treatment}>Price:{post?.name}</div>

            <div className={classes.treatment}>Duration:{post?.email}</div>
          </div>
        </li>
      );
    });
  } */
  /* console.log("result", result); */

  /*  const User = post.map((user, index) => {
    console.log("post", post);
    return user ? (
      <li key={index} className={classes.frame}>
        <div className={classes.AllTreatments}>
          <div className={classes.treatment}>ID:{post.id}</div>

          <div className={classes.treatment}>Price:{post.name}</div>

          <div className={classes.treatment}>Duration:{post.email}</div>
        </div>
      </li>
    ) : null;
  }); */

  return (
    <>
      <div className={classes.darkBG} onClick={props.onClose} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalHeader}>
            <h5 className={classes.heading}>Dialog</h5>
          </div>
          <CustomButton
            className={classes.closeBtn}
            onClick={props.onClose}
          ></CustomButton>
          <div className={classes.modalContent}>
            <div className={classes.frame}>
              <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.frame}>
                  <div className={classes.positionLBL}>
                    <label>
                      <b>Name</b>
                    </label>
                  </div>
                  <div className={classes.positionINP}>
                    <input
                      type="text"
                      required
                      className={classes.name}
                      ref={nameInputRef}
                    ></input>
                  </div>

                  <div className={classes.FP}>
                    <CustomButton
                      label="Search"
                      className={classes.buttonCSS}
                      type="submit"
                    ></CustomButton>
                  </div>
                  <div className={classes.UsersList}></div>
                </div>
              </form>
              <div>
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

                <div>{}</div>
              </div>

              <button className={classes.button} onClick={props.onClose}>
                Close
              </button>
            </div>
          </div>
          <div className={classes.modalActions}>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSearch;
